import Image from "next/image"

export default function FinancialSec(){
    return(
        <section>
            <div className="swasth-secC sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>Seamlessly Integrated, <span>Essential Financial Benefits.</span></h2>
                    </div>
                    <div className="financial_wrapper">
                        <div className="card_wrapper">
                            <figure>
                                <Image src="/assets/images/swasth/swasth_card.svg" width="450" height="330" alt="" className="card"></Image>
                            </figure>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance1.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Guaranteed Cashback Rewards</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance2.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Coverage for Family & Friends</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance3.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Hassle-Free Lab Test Scheduling</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance4.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Savings on Doorstep Medicine Delivery</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance5.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Complimentary Insurance cover</p>
                        </div>
                        <div className="finance_col">
                            <div className="icon">
                                <Image src="/assets/images/swasth/finance6.svg" width="50" height="50" alt="Finance Icon"></Image>
                            </div>
                            <p>Exclusive Medical Offers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}