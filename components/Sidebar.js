"use cleint";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Sidebar = () => {
  const [dashboardDrawer, setDashboardDrawer] = useState(false);
  const [fileDrawer, setFileDrawer] = useState(false);
  const [helpDrawer, setHelpDrawer] = useState(false);

  return (
    <div className={inter.className}>
      <aside
        id="cta-button-sidebar"
        className="fixed  left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between ">
          <ul className="space-y-2 ">
            <li>
              <img
                src="logo.png"
                style={{
                  position: "absolute",
                  width: "133px",
                  height: "41px",
                  left: "18px",
                  top: "24px",
                }}
              ></img>
            </li>
            <l1 className="">
              <p className="text-xl p-2 px-5 pb-14 font-normal font-sans">
                Greenstitch
              </p>
            </l1>

            <l1>
              <p className="text-sm p-2 px-5 font-normal leading-5">
                DASHBOARD
              </p>
            </l1>

            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setDashboardDrawer(!dashboardDrawer)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1033 8.27667C12.9603 7.46508 12.5798 6.71415 12.0099 6.11882C11.4401 5.52349 10.7065 5.1105 9.90197 4.93209C9.09742 4.75368 8.25804 4.81786 7.48996 5.1165C6.72188 5.41515 6.05961 5.93485 5.5869 6.60989C5.11419 7.28492 4.85226 8.08498 4.83425 8.90887C4.81624 9.73277 5.04295 10.5435 5.48571 11.2386C5.92847 11.9336 6.56739 12.4818 7.32168 12.8137C8.07597 13.1456 8.91175 13.2464 9.72333 13.1033M1.5 9C1.5 10.4834 1.93987 11.9334 2.76398 13.1668C3.58809 14.4001 4.75943 15.3614 6.12987 15.9291C7.50032 16.4968 9.00832 16.6453 10.4632 16.3559C11.918 16.0665 13.2544 15.3522 14.3033 14.3033C15.3522 13.2544 16.0665 11.918 16.3559 10.4632C16.6453 9.00832 16.4968 7.50032 15.9291 6.12987C15.3614 4.75943 14.4001 3.58809 13.1668 2.76398C11.9334 1.93987 10.4834 1.5 9 1.5M8.16667 9C8.16667 9.22101 8.25446 9.43297 8.41074 9.58926C8.56702 9.74554 8.77899 9.83333 9 9.83333C9.22101 9.83333 9.43297 9.74554 9.58926 9.58926C9.74554 9.43297 9.83333 9.22101 9.83333 9C9.83333 8.77899 9.74554 8.56702 9.58926 8.41074C9.43297 8.25446 9.22101 8.16667 9 8.16667C8.77899 8.16667 8.56702 8.25446 8.41074 8.41074C8.25446 8.56702 8.16667 8.77899 8.16667 9Z"
                    stroke="#282828"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Dashboard
                </span>
                {dashboardDrawer ? (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.09766 6.5L6.09766 1.5L11.0977 6.5"
                      stroke="#282828"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.22784 7.5L10.2278 12.5L15.2278 7.5"
                      stroke="#5F6980"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
              <ul
                id="dropdown-example"
                class={`${dashboardDrawer ? "block" : "hidden"}  py-2 `}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Record
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Anakyse
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Learn
                  </a>
                </li>
              </ul>
            </li>
            <l1>
              <p className="pt-8 text-sm p-2 px-5 font-normal leading-5">
                PAGES
              </p>
            </l1>
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setHelpDrawer(!helpDrawer)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 11.5L14.2917 14.2917M6.5 11.5L3.70833 14.2917M3.70833 3.70833L6.5 6.5M14.2917 3.70833L11.5 6.5M5.66667 9C5.66667 9.88405 6.01786 10.7319 6.64298 11.357C7.2681 11.9821 8.11594 12.3333 9 12.3333C9.88405 12.3333 10.7319 11.9821 11.357 11.357C11.9821 10.7319 12.3333 9.88405 12.3333 9C12.3333 8.11594 11.9821 7.2681 11.357 6.64298C10.7319 6.01786 9.88405 5.66667 9 5.66667C8.11594 5.66667 7.2681 6.01786 6.64298 6.64298C6.01786 7.2681 5.66667 8.11594 5.66667 9ZM1.5 9C1.5 9.98491 1.69399 10.9602 2.0709 11.8701C2.44781 12.7801 3.00026 13.6069 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C9.98491 16.5 10.9602 16.306 11.8701 15.9291C12.7801 15.5522 13.6069 14.9997 14.3033 14.3033C14.9997 13.6069 15.5522 12.7801 15.9291 11.8701C16.306 10.9602 16.5 9.98491 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C3.00026 4.39314 2.44781 5.21993 2.0709 6.12987C1.69399 7.03982 1.5 8.01509 1.5 9Z"
                    stroke="#282828"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  Help Center
                </span>
                {helpDrawer ? (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.09766 6.5L6.09766 1.5L11.0977 6.5"
                      stroke="#282828"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.22784 7.5L10.2278 12.5L15.2278 7.5"
                      stroke="#5F6980"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
              <ul
                id="dropdown-example"
                class={`${helpDrawer ? "block" : "hidden"}  py-2 `}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    See FAQ
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={() => setFileDrawer(!fileDrawer)}
              >
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.16667 1.33334H6.5L9 3.83334H14.8333C15.2754 3.83334 15.6993 4.00893 16.0118 4.32149C16.3244 4.63405 16.5 5.05797 16.5 5.5V12.1667C16.5 12.6087 16.3244 13.0326 16.0118 13.3452C15.6993 13.6577 15.2754 13.8333 14.8333 13.8333H3.16667C2.72464 13.8333 2.30072 13.6577 1.98816 13.3452C1.67559 13.0326 1.5 12.6087 1.5 12.1667V3C1.5 2.55798 1.67559 2.13405 1.98816 1.82149C2.30072 1.50893 2.72464 1.33334 3.16667 1.33334Z"
                    stroke="#5F6980"
                    stroke-width="1.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                >
                  File Manager
                </span>
                {fileDrawer ? (
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.09766 6.5L6.09766 1.5L11.0977 6.5"
                      stroke="#282828"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.22784 7.5L10.2278 12.5L15.2278 7.5"
                      stroke="#5F6980"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </button>
              <ul
                id="dropdown-example"
                class={`${fileDrawer ? "block" : "hidden"}  py-2 `}
              >
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    See Files
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 "
                  >
                    Upload Files
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex flex-row justify-around">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.7096 6.45802C10.7096 5.53754 11.4558 4.79135 12.3763 4.79135C13.2968 4.79135 14.043 5.53754 14.043 6.45802C14.043 7.37849 13.2968 8.12468 12.3763 8.12468C11.4558 8.12468 10.7096 7.37849 10.7096 6.45802ZM9.52676 7.08302H3.41797C3.07279 7.08302 2.79297 6.8032 2.79297 6.45802C2.79297 6.11284 3.07279 5.83302 3.41797 5.83302H9.52676C9.81287 4.52253 10.98 3.54135 12.3763 3.54135C13.7726 3.54135 14.9397 4.52253 15.2258 5.83302H18.418C18.7631 5.83302 19.043 6.11284 19.043 6.45802C19.043 6.8032 18.7631 7.08302 18.418 7.08302H15.2258C14.9397 8.39351 13.7726 9.37468 12.3763 9.37468C10.98 9.37468 9.81287 8.39351 9.52676 7.08302ZM5.70964 13.1247C5.70964 12.2042 6.45583 11.458 7.3763 11.458C8.29678 11.458 9.04297 12.2042 9.04297 13.1247C9.04297 14.0452 8.29678 14.7914 7.3763 14.7914C6.45583 14.7914 5.70964 14.0452 5.70964 13.1247ZM7.3763 16.0414C5.98 16.0414 4.81287 15.0602 4.52676 13.7497H3.41797C3.07279 13.7497 2.79297 13.4699 2.79297 13.1247C2.79297 12.7795 3.07279 12.4997 3.41797 12.4997H4.52676C4.81287 11.1892 5.98 10.208 7.3763 10.208C8.7726 10.208 9.93973 11.1892 10.2258 12.4997H18.418C18.7631 12.4997 19.043 12.7795 19.043 13.1247C19.043 13.4699 18.7631 13.7497 18.418 13.7497H10.2258C9.93973 15.0602 8.7726 16.0414 7.3763 16.0414Z"
                fill="#5F6980"
              />
            </svg>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.1406 2.66537C4.53282 2.66537 3.94992 2.90682 3.52015 3.33659C3.09038 3.76636 2.84894 4.34925 2.84894 4.95704V14.957C2.84894 15.5648 3.09038 16.1477 3.52015 16.5775C3.94992 17.0073 4.53282 17.2487 5.1406 17.2487H10.9739C11.5817 17.2487 12.1646 17.0073 12.5944 16.5775C13.0242 16.1477 13.2656 15.5648 13.2656 14.957V13.2904C13.2656 12.9452 12.9858 12.6654 12.6406 12.6654C12.2954 12.6654 12.0156 12.9452 12.0156 13.2904V14.957C12.0156 15.2333 11.9059 15.4983 11.7105 15.6936C11.5152 15.889 11.2502 15.9987 10.9739 15.9987H5.1406C4.86434 15.9987 4.59939 15.889 4.40403 15.6936C4.20868 15.4983 4.09894 15.2333 4.09894 14.957V4.95704C4.09894 4.68077 4.20868 4.41582 4.40403 4.22047C4.59939 4.02512 4.86434 3.91537 5.1406 3.91537H10.9739C11.2502 3.91537 11.5152 4.02512 11.7105 4.22047C11.9059 4.41582 12.0156 4.68077 12.0156 4.95704V6.62371C12.0156 6.96889 12.2954 7.24871 12.6406 7.24871C12.9858 7.24871 13.2656 6.96889 13.2656 6.62371V4.95704C13.2656 4.34925 13.0242 3.76636 12.5944 3.33659C12.1646 2.90682 11.5817 2.66537 10.9739 2.66537H5.1406ZM16.4159 7.0151C16.1718 6.77102 15.7761 6.77102 15.532 7.0151C15.2879 7.25918 15.2879 7.65491 15.532 7.89898L16.9651 9.33204H6.80727C6.46209 9.33204 6.18227 9.61186 6.18227 9.95704C6.18227 10.3022 6.46209 10.582 6.80727 10.582H16.9651L15.532 12.0151C15.2879 12.2592 15.2879 12.6549 15.532 12.899C15.7761 13.1431 16.1718 13.1431 16.4159 12.899L18.9126 10.4023C18.9246 10.3904 18.9362 10.3781 18.9473 10.3653C19.03 10.2695 19.0789 10.1547 19.0939 10.0364C19.099 9.99648 19.1002 9.95641 19.0976 9.91669C19.0882 9.77044 19.0276 9.62687 18.9159 9.5151L16.4159 7.0151Z"
                fill="#5F6980"
              />
            </svg>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.918 2.03101C10.8055 2.03101 10.6935 2.03334 10.5822 2.03795C10.5112 2.02551 10.4387 2.0298 10.3706 2.04951C6.22474 2.33077 2.94897 5.78284 2.94897 10C2.94897 14.2172 6.22474 17.6692 10.3706 17.9505C10.4387 17.9702 10.5112 17.9745 10.5822 17.9621C10.6935 17.9667 10.8055 17.969 10.918 17.969C11.0304 17.969 11.1423 17.9667 11.2535 17.9621C11.3245 17.9745 11.3969 17.9702 11.465 17.9505C15.611 17.6694 18.887 14.2173 18.887 10C18.887 5.78272 15.611 2.33057 11.465 2.04949C11.3969 2.0298 11.3245 2.02552 11.2535 2.03795C11.1423 2.03334 11.0304 2.03101 10.918 2.03101ZM11.0726 2.97067C11.0212 2.96956 10.9697 2.969 10.918 2.969C10.8662 2.969 10.8146 2.96956 10.763 2.97067C9.99862 4.24888 9.45997 5.62086 9.14708 7.03123H12.6886C12.3757 5.62086 11.837 4.24888 11.0726 2.97067ZM12.8626 7.96922H8.97303C8.77145 9.31543 8.77147 10.685 8.9731 12.0312H12.8626C13.0642 10.685 13.0642 9.31543 12.8626 7.96922ZM13.8104 12.0312C13.9989 10.684 13.9989 9.31641 13.8104 7.96922H17.6512C17.8449 8.61217 17.949 9.29393 17.949 10C17.949 10.7062 17.8449 11.3881 17.6511 12.0312H13.8104ZM12.6885 12.9692H9.14718C9.46008 14.3794 9.9987 15.7513 10.763 17.0293C10.8145 17.0304 10.8662 17.031 10.918 17.031C10.9697 17.031 11.0212 17.0304 11.0726 17.0293C11.837 15.7513 12.3756 14.3794 12.6885 12.9692ZM12.2174 16.9112C12.8896 15.657 13.3664 14.3287 13.6478 12.9692H17.2931C16.3499 14.991 14.4732 16.4897 12.2174 16.9112ZM13.6479 7.03123C13.3665 5.67164 12.8896 4.34312 12.2174 3.08883C14.4734 3.51036 16.3501 5.00926 17.2933 7.03123H13.6479ZM9.61826 16.9111C8.94608 15.657 8.46928 14.3286 8.18787 12.9692H4.54283C5.48602 14.9909 7.36254 16.4895 9.61826 16.9111ZM8.02531 12.0312C7.83674 10.684 7.83672 9.31641 8.02525 7.96922H4.18469C3.99104 8.61217 3.88697 9.29393 3.88697 10C3.88697 10.7062 3.99109 11.3881 4.18483 12.0312H8.02531ZM8.18778 7.03123C8.46918 5.67166 8.94601 4.34316 9.61826 3.08889C7.36237 3.5105 5.48575 5.00936 4.54263 7.03123H8.18778Z"
                fill="#5F6980"
              />
            </svg>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
