import myVisa from "../assets/icons/black-visa-logo-19727.png";
import myMasterCard from "../assets/icons/pngkey.com-master-card-logo-png-2454090.png";
import myAmEx from "../assets/icons/kisspng-centurion-card-american-express-credit-card-logo-5af54e27377378.8618566915260257672271.png"

const Footer = () => {
    return (
        <div className="grid bg-[#3a3735] px-9">
            <div className="h-full bg-white flex justify-center items-center text-white m-4 mr-6">
                <div className="flex justify-evenly items-center bg-blue-400 pl-2 pr-4 py-1 rounded hover:cursor-auto space-x-1">
                    <div>
                        <img width={25} height={25} src="https://tmpfiles.nohat.cc/logo-computer-icons-brand-instagram-logo-53509c4b9.png" />
                    </div>
                    <button >Follow on Instagram</button>
                </div>
                
            </div>
            <div className="flex justify-start items-center pt-12 px-5 pb-2">
                <div className="flex items-center">
                    <img width={250} height={250} src="https://themusiccablecompany.com/wp-content/themes/mtc-child/images/footer-logo.png"/>
                </div>
            </div>
            <div className="flex justify-between pl-2">
                <div className="flex justify-between text-lg space-x-24">
                    <div>
                        <ul className="text-white">
                            <li className="p-[9px]">HOME</li>
                            <li className="p-[9px]">OUR STORY</li>
                            <li className="p-[9px]">CONTACT US</li>
                            <li className="p-[9px]">FAQS</li>
                            <li className="p-[9px]">DELIVERY AND RETURNS</li>
                            <li className="p-[9px]">SITEMAP</li>
                            <li className="p-[9px]">TERMS AND CONDITIONS</li>
                            <li className="p-[9px]">FRIEND OF TMCC</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-white">
                            <li className="p-[9px]">SHOP</li>
                            <li className="p-[9px]">NEWS</li>
                            <li className="p-[9px]">PRODUCT GALLERY</li>
                            <li className="p-[9px]">MUSIC SHOP RETAILERS</li>
                            <li className="p-[9px]">OUR WARRANTY</li>
                            <li className="p-[9px]">AFTERCARE SERVICE</li>
                            <li className="p-[9px]">PRIVACY POLICY</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="p-3">
                        <h2 className="text-2xl ml-3 text-red-700">FOLLOW US</h2>
                    </div>
                    <div>
                        <ul className="text-white">
                            <li className="flex justify-evenly text-lg p-[10px] hover:text-red-700 mr-1">
                                <div className="hover:cursor-pointer pl-1">FACEBOOK</div>
                                <div><img src="https://themusiccablecompany.com/wp-content/themes/mtc-child/icons/arrow1.svg" /></div>
                            </li>
                            <li className="flex justify-evenly text-lg p-[10px] hover:text-red-700 space-x-6 mr-5">
                                <div className="hover:cursor-pointer">INSTAGRAM</div>
                                <div><img src="https://themusiccablecompany.com/wp-content/themes/mtc-child/icons/arrow1.svg" /></div>
                            </li>
                            <li className="flex justify-evenly text-lg p-[10px] hover:text-red-700 mr-1">
                                <div className="hover:cursor-pointer">YOUTUBE</div>
                                <div><img src="https://themusiccablecompany.com/wp-content/themes/mtc-child/icons/arrow1.svg" /></div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex justify-stretch space-x-2 m-5">
                            <li>
                                <img className="bg-white text-[#3a3735] px-1 rounded" width={42} height={30} src={myVisa} />
                            </li>
                            <li>
                                <img className="bg-white stroke-[#3a3735] rounded p-1" width={42} src={myMasterCard} />
                            </li>
                            <li>
                            <img className="bg-white stroke-[#3a3735] rounded py-[7px]" width={40} height={45} src={myAmEx} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-[#3a3735] bg-[#3a3735]">
                <h4 className="ml-16">© 2024 Music Cable Co. All rights reserved.Website maintained by <b>Internet Creation Ltd.</b></h4>
            </div>
        </div>
    )
};

export default Footer;