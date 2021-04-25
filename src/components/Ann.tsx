// @flow
import * as React from "react";
import { Announcements } from "../type";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";

interface AnnouncementProps {
  children?: React.ReactNode;
  announce: Announcements;
}

function Ann({ announce }: AnnouncementProps) {
  const { title, company, region, closeDt } = announce;
  return (
    <div className="flex border-2 justify-center items-center pl-3">
      <div className="w-48 relative p-4">
        <img
          src="https://picsum.photos/seed/picsum/200"
          alt=""
          className="w-45 rounded-md border-2 border-gray-300 "
        />
      </div>
      <div className="flex-auto p-6">
        <div className="flex flex-wrap-reverse ">
          <div className="flex-auto space-x-3">
            <h1 className="text-xl font-semibold">{title}</h1>
          </div>
          <div className="ml-auto">
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 hover:text-red-600 border border-gray-300"
              type="button"
              aria-label="like"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="w-full text-left text-sm font-medium text-gray-500 mt-2">
            <p>{company}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-end text-sm mt-3 text-gray-500">
          <div className="flex flex-start mr-2 items-end">
            <LocationMarkerIcon className="w-6 h-6" aria-hidden="true" />
            <p className="pl-1">{region}</p>
          </div>
          <div className="flex flex-start items-end">
            <CalendarIcon className="w-5 h-5 " aria-hidden="true" />
            <p className="pl-1">~ {closeDt}</p>
          </div>
        </div>
        <button
          type="button"
          className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
        >
          iOS
        </button>
        <button
          type="button"
          className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
        >
          정보처리기사
        </button>
      </div>
    </div>
  );
}

export default Ann;
