import React from 'react'
import { Fragment } from 'react';
import './header.css';

const Header = () => {
    return (
        
 <Fragment>
      <div className="flex items-center justify-between lg:justify-start w-full text-white bg-blue-600">
       <div className="flex items-center justify-between lg:w-2/12">
          <div className="flex justify-between items-center">
             <Link  className="block lg:hidden no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--GlobalNavButton"></i>
             </Link>

             <Link  className="block lg:hidden no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--Search"></i>
             </Link>

             <Link  className="hidden lg:block no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--WaffleOffice365"></i>
             </Link>

             <h1 className="hidden lg:block font-semibold px-2">Outlook</h1>
        </div>
     </div>

      <span className="lg:hidden font-semibold">
            Inbox
        </span>

    <div className="flex lg:hidden items-stretch justify-end">
      <Link  className="no-underline hover:bg-blue-700 p-4">
                <i className="ms-Icon ms-Icon--SingleColumnEdit"></i>
        </Link>
    </div>

    <div className="hidden lg:flex items-center justify-between w-10/12">
      <div className="relative flex flex-grow items-center bg-blue-300 text-blue-700 rounded-sm mr-4">
        <span className="absolute left-0 px-3">
                    <i className="ms-Icon ms-Icon--Search"></i>
                </span>

        <input type="text" className="hidden lg:block no-appearance bg-blue-300 placeholder-blue-700 py-1 ml-10" placeholder="Search">
        </div>

      <div className="hidden lg:flex items-stretch justify-end">
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--SkypeLogo"></i>
                </Link>
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--Diamond"></i>
                </Link>
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--EventToDoLogo"></i>
                </Link>
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--Settings"></i>
                </Link>
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--Help"></i>
                </Link>
        <Link  className="no-underline hover:bg-blue-700 p-4">
                    <i className="ms-Icon ms-Icon--Megaphone"></i>
                </Link>
        <Link  className="flex items-center no-underline hover:bg-blue-700 px-3">
                    <span className="flex items-center justify-center w-32px bg-purple-500 rounded-full">
                        D8
                    </span>
                </Link>
      </div>
    </div>
  </div>

  <div className="flex items-center justify-between w-full border-b border-gray-400 p-2">
    <div className="hidden lg:flex items-center w-full">
      <div className="w-2/12">
        <Link  className="no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--GlobalNavButton"></i>
                </Link>
        <Link  className="font-semibold bg-blue-600 text-sm text-white rounded-sm p-2 mx-2">
                    New message
                </Link>
      </div>

      <div className="flex flex-nowrap w-10/12 text-sm">
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mr-2">
                    <i className="ms-Icon ms-Icon--Delete mr-1"></i>
                    Remove
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--Archive mr-1"></i>
                    Archive
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--Blocked mr-1"></i>
                    Spam
                    <i className="ms-Icon ms-Icon--ChevronDownMed text-xs ml-2"></i>
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--Broom mr-1"></i>
                    Sweep
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--FabricMovetoFolder mr-1"></i>
                    Move to
                    <i className="ms-Icon ms-Icon--ChevronDownMed text-xs ml-2"></i>
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--Tag mr-1"></i>
                    Categorise
                    <i className="ms-Icon ms-Icon--ChevronDownMed text-xs ml-2"></i>
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--Clock mr-1"></i>
                    Snooze
                    <i className="ms-Icon ms-Icon--ChevronDownMed text-xs ml-2"></i>
                </Link>
        <Link  className="inline-flex items-center no-underline hover:bg-gray-100 text-blue-700 p-1 mx-2">
                    <i className="ms-Icon ms-Icon--More"></i>
                </Link>
      </div>
    </div>

    <div className="flex lg:hidden rounded-full bg-gray-300 text-gray-700 border-2 border-gray-300">
      <div className="text-blue-500 rounded-full bg-white py-1 px-2">
        Focused
      </div>

      <span className="py-1 px-2">
                Other
            </span>
    </div>

    <Link  className="flex lg:hidden items-center text-sm text-gray-700">
            <i className="ms-Icon ms-Icon--Filter mr-1"></i>
            Filter
        </Link>
  </div>

  <div className="relative overflow-y-scroll h-screen">
    <div className="absolute lg:flex w-screen">
      <div className="block lg:flex lg:w-1/2 hover:bg-gray-200 border-b border-gray-400 py-2 px-4">
        <span className="hidden lg:flex flex-shrink-0 items-center justify-center w-32px bg-blue-500 text-white rounded-full">
                    M
                </span>

        <div className="lg:ml-3">
          <h3 className="text-base truncate">
            Microsoft
          </h3>

          <div className="flex flex-nowrap justify-between items-center">
            <h4 className="truncate text-sm pr-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sunt adipisci similique dolore obcaecati vitae a debitis dolorum quos quod. Eos neque a nisi porro totam ut voluptatem, praesentium recusandae?
            </h4>

            <span className="flex-shrink-0 text-xs text-gray-700 text-right">
                            Sun 29/12
                        </span>
          </div>

          <p className="text-sm text-gray-800 truncate">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit deserunt sequi voluptatibus animi tempora placeat facilis dolore exercitationem soluta. Officiis exercitationem voluptatem consequatur sed fugit deserunt optio nihil fuga.
          </p>
        </div>
      </div>

       <div className="hidden lg:block lg:w-1/2">
                <h1>Test</h1>
            </div> 
    </div>
  </div>

  <div className="fixed lg:hidden flex bottom-0 w-full">
    <div className="flex items-center justify-between w-full border-t border-gray-200 p-2">
      <div className="px-8">
        <Link  className="text-2xl text-blue-600">
                    <i className="ms-Icon ms-Icon--Mail"></i>
                </Link>
      </div>
      <div className="px-8">
        <Link  className="text-2xl text-gray-700">
                    <i className="ms-Icon ms-Icon--Calendar"></i>
                </Link>
      </div>
      <div className="px-8">
        <Link  className="text-2xl text-gray-700">
                    <i className="ms-Icon ms-Icon--People"></i>
                </Link>
      </div>
    </div>
  </div>
  </Fragment>
       
    )
}

export default Header ;

  
  
  
 
  