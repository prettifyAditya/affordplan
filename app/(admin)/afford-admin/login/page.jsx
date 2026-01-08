'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useLoginMutation, useCheckLoginQuery, authAPISlice } from "../../../../store/backendSlice/authAPISlice";
import { useDispatch } from "react-redux";
import Pageloading from '../Pageloading';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [UserName, setUserName] = useState("");
  const [Passwords, setPasswords] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  // ✅ Check login status on mount
  const { data: checkData, isSuccess, refetch } = useCheckLoginQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && checkData?.loggedIn) {
      router.push("/afford-admin/dashboard");
    }
  }, [isSuccess, checkData, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await login({ UserName, Passwords }).unwrap();
      if (result.success) {
        //✅ Immediately update RTK Query cache so we don’t bounce back
        dispatch(
          authAPISlice.util.updateQueryData(
            "checkLogin",
            undefined,
            (draft) => {
              draft.loggedIn = true;
              draft.user = result.user || null;
              draft.permissions = result.permissions || null;
            }
          )
        );
        toast.success("Login successful!", { duration: 500 });
        router.push("/afford-admin/dashboard");
      } else {
        toast.error("Invalid credentials", { duration: 1500 });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong. Please try again.", { duration: 1500 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="form-wrap">
          <div className="login-form" data-tab="login-form">
            <form className="model-body" onSubmit={handleLogin}>
              <div className="logo">
                <img src="/admin-assets/img/logo.svg" alt="Logo" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="txtusername">User Name*</label>
                  <input
                    type="text"
                    id="txtusername"
                    className="form-control"
                    placeholder="Enter user name"
                    value={UserName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="txtpassword">Password*</label>
                  <div className="password-wrap">
                    <input
                      type="password"
                      id="txtpassword"
                      className="form-control login-password"
                      placeholder="Enter Password"
                      value={Passwords}
                      onChange={(e) => setPasswords(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="form-group btn w-100"
                  disabled={isLoading || loading}
                >
                  {isLoading || loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Show loader while login request is in progress */}
      {loading && <Pageloading />}
    </>
  );
}