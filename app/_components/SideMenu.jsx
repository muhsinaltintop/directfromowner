import React from "react";

const SideMenu = () => {
  return (
    <ul className="flex flex-col space-y-2">
      <li key="1">
        <strong className="block text-xs font-medium uppercase text-gray-400">
          Menu
        </strong>

        <ul className="mt-2 space-y-1">
          <li key="11">
            <a
              href="#"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Profile
            </a>
          </li>

          <li key="12">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Team
            </a>
          </li>

          <li key="13">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Projects
            </a>
          </li>

          <li key="14">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Meetings
            </a>
          </li>

          <li key="15">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Calendar
            </a>
          </li>
        </ul>
      </li>

      <li key="2">
        <strong className="block text-xs font-medium uppercase text-gray-400">
          Support
        </strong>

        <ul className="mt-2 space-y-1">
          <li key="21">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Update
            </a>
          </li>

          <li key="22">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Help
            </a>
          </li>

          <li key="23">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Settings
            </a>
          </li>
        </ul>
      </li>

      <li key="3">
        <strong className="block text-xs font-medium uppercase text-gray-400">
          Profile
        </strong>

        <ul className="mt-2 space-y-1">
          <li key="31">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Details
            </a>
          </li>

          <li key="32">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Subscription
            </a>
          </li>

          <li key="33">
            <form action="#">
              <button
                type="submit"
                className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
              >
                Logout
              </button>
            </form>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SideMenu;
