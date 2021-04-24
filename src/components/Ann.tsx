// @flow
import * as React from "react";
import { Announcements } from "../type";

interface AnnouncementProps {
  children?: React.ReactNode;
  announce: Announcements;
}

function Ann({ announce }: AnnouncementProps) {
  const { title, company, closeDt } = announce;
  return (
    <div>
      {title}, {company}, {closeDt}
    </div>
  );
}

export default Ann;
