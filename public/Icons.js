const BathIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
    >
      <path
        fill={color}
        d="M12 2a3 3 0 013 3c0 1.33-.674 2.329-1.496 3.217A5.997 5.997 0 0118 10.89V14h2a1 1 0 011 1v3a1 1 0 01-1 1h-.295l1.427 2.856a1 1 0 01-.886 1.47H3.754a1 1 0 01-.886-1.47L4.295 19H4a1 1 0 01-1-1v-3a1 1 0 011-1h2v-3.11a5.997 5.997 0 014.496-5.673C9.674 7.33 9 6.33 9 5a3 3 0 013-3zm0 2a1 1 0 00-1 1c0 .648.314 1.199.798 1.551a5.973 5.973 0 012.404 0A1.992 1.992 0 0013 5a1 1 0 00-1-1zm3 8H9a4 4 0 00-4 4v2h14v-2a4 4 0 00-4-4zm3.2-3.2a1 1 0 00-1.6 1.2c.333.444.533 1.013.533 1.6a1 1 0 002 0c0-1.077-.4-2.053-1.067-2.8zM12 12a1 1 0 00-1 1c0 .587.2 1.156.533 1.6a1 1 0 001.6-1.2c-.267-.356-.533-.756-.533-1.4a1 1 0 00-1-1zM7.4 7.4a1 1 0 00-1.6 1.2A3.985 3.985 0 007 11a1 1 0 002 0c0-1.077-.4-2.053-1.067-2.8z"
      />
    </svg>
  );
};
const ShareIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill="currentColor"
      className="text-gray-600"
    >
      <path d="M 18 2 C 16.35499 2 15 3.3549904 15 5 C 15 5.1909529 15.021791 5.3771224 15.056641 5.5585938 L 7.921875 9.7207031 C 7.3985399 9.2778539 6.7320771 9 6 9 C 4.3549904 9 3 10.35499 3 12 C 3 13.64501 4.3549904 15 6 15 C 6.7320771 15 7.3985399 14.722146 7.921875 14.279297 L 15.056641 18.439453 C 15.021555 18.621514 15 18.808386 15 19 C 15 20.64501 16.35499 22 18 22 C 19.64501 22 21 20.64501 21 19 C 21 17.35499 19.64501 16 18 16 C 17.26748 16 16.601593 16.279328 16.078125 16.722656 L 8.9433594 12.558594 C 8.9782095 12.377122 9 12.190953 9 12 C 9 11.809047 8.9782095 11.622878 8.9433594 11.441406 L 16.078125 7.2792969 C 16.60146 7.7221461 17.267923 8 18 8 C 19.64501 8 21 6.6450096 21 5 C 21 3.3549904 19.64501 2 18 2 z M 18 4 C 18.564129 4 19 4.4358706 19 5 C 19 5.5641294 18.564129 6 18 6 C 17.435871 6 17 5.5641294 17 5 C 17 4.4358706 17.435871 4 18 4 z M 6 11 C 6.5641294 11 7 11.435871 7 12 C 7 12.564129 6.5641294 13 6 13 C 5.4358706 13 5 12.564129 5 12 C 5 11.435871 5.4358706 11 6 11 z M 18 18 C 18.564129 18 19 18.435871 19 19 C 19 19.564129 18.564129 20 18 20 C 17.435871 20 17 19.564129 17 19 C 17 18.435871 17.435871 18 18 18 z"></path>
    </svg>
  );
};
const LikeIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-red-500"
    >
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke-width="2"
      ></path>
    </svg>
  );
};

const GarageIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
    >
      <path d="M12 2L2 7v15h20V7L12 2zm7 18h-2v-4H7v4H5v-6h14v6zM9 10v1H7v2h2v1H7v2h10v-2h-2v-1h2v-2h-2v-1h2V9H9v1h2zm2-7.5L20.5 8h-17L11 2.5zm-3 12.5v-1h6v1H8zm0-3v-1h6v1H8z" />
    </svg>
  );
};

const BedIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 13h18v8H3z"></path>
      <path d="M3 13V7a2 2 0 012-2h4a2 2 0 012 2v6"></path>
      <path d="M10 7a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};
const GraduateIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      ></path>
    </svg>
  );
};

const HeaterIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
    >
      <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 6h2v2H6V6zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm0 4h2v2H6v-2zm4-12h8v2h-8V6zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2zm0 4h8v2h-8v-2z" />
    </svg>
  );
};
const CalendarIcon = ({ size, color, fill = "none" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={24}
      width={24}
      fill="white"
    >
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 20V9h14v11H5zM7 11h5v5H7z" />
    </svg>
  );
};

const Icon = ({ name, size, color, style, className, fill }) => {
  const icons = {
    bathIcon: BathIcon,
    shareIcon: ShareIcon,
    garageIcon: GarageIcon,
    bedIcon: BedIcon,
    graduateIcon: GraduateIcon,
    heaterIcon: HeaterIcon,
    calendarIcon: CalendarIcon,
    likeIcon: LikeIcon,
  };

  const Component = icons[name];
  return (
    <Component
      size={size}
      color={color}
      style={style}
      className={className}
      fill={fill}
    />
  );
};
export { Icon };
