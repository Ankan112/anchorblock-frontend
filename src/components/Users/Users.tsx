import Navigation from "../shared/Navigation";

const Users = () => {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <div className="flex justify-between items-center mt-[34px]">
          <h3 className="text-2xl font-medium text-[#101828] ">Users</h3>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 py-[10px] px-4 rounded-lg border border-solid border-[#D0D5DD] text-sm font-semibold"
              style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div>
                <img src="/images/upload-cloud.svg" alt="" />
              </div>
              Import
            </button>
            <button
              className="flex items-center gap-2 py-[10px] px-4 rounded-lg border border-solid bg-[#7F56D9] border-[#7F56D9] text-white text-sm font-semibold"
              style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div>
                <img src="/images/plus.svg" alt="" />
              </div>
              Add User
            </button>
          </div>
        </div>
        {/* user table start  */}
        <div className="mt-[35px] border border-solid rounded-lg overflow-x-scroll md:overflow-x-hidden">
          <table className="w-[1216px]">
            <tr className=" bg-[#F9FAFB]">
              <td className="w-[408px] border-b border-solid border-[#EAECF0] flex items-center gap-3 py-3 px-6 ">
                <div className="w-5 h-5 flex justify-center items-center p-[3px] rounded-md bg-[#F9F5FF] border border-solid border-[#7F56D9]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.91667 7H11.0833"
                      stroke="#7F56D9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="flex items-center text-xs font-medium text-[#667085] gap-1">
                  User Info
                  <div>
                    <img src="/images/arrow-down.svg" alt="" />
                  </div>
                </span>
              </td>
              <td className="w-[408px] text-xs font-medium text-[#667085] border-b border-solid border-[#EAECF0]  py-3 px-6">
                About
              </td>
              <td className="w-[121px] text-xs font-medium text-[#667085] border-b border-solid border-[#EAECF0]  py-3 px-6">
                Status
              </td>
              <td className="w-[88px]  border-b border-solid border-[#EAECF0] py-3 px-6 rounded-lg"></td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 px-6 py-4 border-b border-solid border-[#EAECF0]">
                <div className="w-5 h-5 p-[3px] bg-purple-50 rounded-md border border-violet-500 justify-center items-center inline-flex">
                  <div className="w-3.5 h-3.5 relative flex-col justify-start items-start flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33333 7"
                        stroke="#7F56D9"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <img src="/images/Avatar1.png" alt="" />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#101828]">
                    User Name
                  </p>
                  <p className="text-[#667085] text-[14px] font-normal">
                    demo@gmail.com
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-solid border-[#EAECF0]">
                <p className="text-[14px] font-normal text-[#101828]">
                  Some dummy Content
                </p>
                <p className="text-[#667085] text-[14px] font-normal">
                  Brings all your news into one place
                </p>
              </td>
              <td className="px-2 border-b border-solid border-[#EAECF0]">
                <span className="text-xs font-medium text-[#027A48] py-[2px] px-2 rounded-2xl bg-[#ECFDF3]">
                  Customer
                </span>
              </td>
              <td className="pl-2 pr-4 border-b border-solid border-[#EAECF0]">
                <div className="flex gap-5 items-center  justify-center">
                  <button>
                    <img src="/images/trash-2.svg" alt="" />
                  </button>
                  <button>
                    <img src="/images/edit-2.svg" alt="" />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td
                colSpan={4}
                className="px-6 py-4 border-b border-solid border-[#EAECF0] "
              >
                <div className="flex justify-between items-center w-full">
                  <button className="py-2 px-[14px] rounded-lg border border-solid border-[#D0D5DD] text-sm font-medium text-[#344054]">
                    Previous
                  </button>
                  <span className="text-sm font-medium text-[#344054]">
                    Page 1 of 10
                  </span>
                  <button className="py-2 px-[14px] rounded-lg border border-solid border-[#D0D5DD] text-sm font-medium text-[#344054]">
                    Next
                  </button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
