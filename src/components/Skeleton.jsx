import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={260}
    viewBox="0 0 400 260"
    backgroundColor="#576cbc"
    foregroundColor="#a5d7e8"
    {...props}
  >
    <rect x="4" y="6" rx="3" ry="3" width="25" height="24" />
    <rect x="53" y="9" rx="3" ry="3" width="151" height="16" />
    <rect x="373" y="1" rx="3" ry="3" width="21" height="28" />
    <rect x="375" y="268" rx="3" ry="3" width="17" height="22" />

    <rect x="4" y="45" rx="3" ry="3" width="25" height="24" />
    <rect x="53" y="48" rx="3" ry="3" width="151" height="16" />
    <rect x="373" y="40" rx="3" ry="3" width="21" height="28" />
    <rect x="3" y="87" rx="3" ry="3" width="25" height="24" />

    <rect x="52" y="90" rx="3" ry="3" width="151" height="16" />
    <rect x="372" y="82" rx="3" ry="3" width="21" height="28" />
    <rect x="3" y="126" rx="3" ry="3" width="25" height="24" />
    <rect x="52" y="129" rx="3" ry="3" width="151" height="16" />

    <rect x="372" y="121" rx="3" ry="3" width="21" height="28" />
    <rect x="4" y="165" rx="3" ry="3" width="25" height="24" />
    <rect x="53" y="168" rx="3" ry="3" width="151" height="16" />
    <rect x="373" y="160" rx="3" ry="3" width="21" height="28" />

    <rect x="4" y="204" rx="3" ry="3" width="25" height="24" />
    <rect x="53" y="207" rx="3" ry="3" width="151" height="16" />
    <rect x="373" y="199" rx="3" ry="3" width="21" height="28" />
    <rect x="376" y="280" rx="3" ry="3" width="21" height="28" />
  </ContentLoader>
);
