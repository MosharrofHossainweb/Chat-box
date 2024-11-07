import React from 'react'

const Home = () => {
  return (
    <>
      <nav className="lg:mt-6 md:mt-4 mt-2 ">
      <div className="container">
        <div className="menu-row flex flex-wrap justify-between items-center w-[330px] lg:w-[1380px] md:w-[760px]">
          <div className="menu-logo flex gap-[230px] ">
            <img src="image/Logo.png" alt="Company Logo"className="w-[75px] h-[25px] md:w-[80px] h-[40px] lg:w-[148px] lg:h-[36px] " />
              
          </div>
          <div className="main_menu invisible lg:visible ">
            <ul className="flex items-center gap-3 md:gap-5  lg:gap-10">
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">About</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Pricing</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Features</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Help</a></li>
              <li><a className="font-Rubik text-[#4F5665] hover:text-[#55d24a] font-normal text-[8px] lg:text-[18px] md:text-[12px]" href="#">Testimonials</a></li>
            </ul>

          </div>
          <div className="menu-btn invisible lg:visible  gap-1 Lg:gap-3">
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-white w-[100px] py-[3px] hover:border-[2px] border-solid border-yellow-600 rounded-[50px]">Sign In</button>
                        <button className="font-Rubik lg:text-[16px] md:text-[12px] text-[8px] hover:bg-white w-[100px] py-[3px] hover:border-[2px] border-solid border-yellow-600 rounded-[50px]">Sign Up</button>
                    </div>  
        </div>
        {/* ===========================bannner=================================================== */}
        <div className="banner">
                    <div className="banner_row flex flex-wrap lg:gap-10 md:gap-5 gap-2">
                        <div className="banner_text">
                            <h1 className="w-[320px] mt-2 lg:w-[550px] md:w-[350px] text-[#0B132A] font-Rubik lg:text-[50px] md:text-[36px] text-[24px] font-semibold ">Want anything to be easy with LaslesVPN.</h1>
                            <p className="text-[#4F5665] text-[8px] md:text-[12px] lg:text-[16px] w-[300px] lg:w-[550px] md:w-[350px]  " >Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                            <button className="font-Rubik text-[8px] md:text-[12px] lg:text-[16px] text-[#FFFFFF] bg-[#F53838] hover:bg-[#c02828] Lg:px-[70px] md:px-[55px] md:py-[13px] lg:py-[17px] px-[55px] py-[13px] rounded-lg mt-[20px] mb-[50px] md:mt-[20px] md:mb-[50px] lg:mt-[50px] lg:mb-[120px] active:scale-[1.1] ">Get Started</button>
                        </div>
                        <div className="banner_img">
                            <img src="image\Illustration 1.png" alt="" />
                        </div>
                    </div>
                    <div className="Review">
                        <div className="review_row mt-[30px] lg:mt-[50px] md:mt-[25px]">
                           
                        </div>
                    </div>
                </div>
        {/* ===========================bannner=================================================== */}
      </div>
    </nav>
    </>
  )
}

export default Home
