const RosePetals = ({ size = 32, color = "#d11a4d" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32 2C20 2 10 16 10 30c0 14 10 24 22 24s22-10 22-24C54 16 44 2 32 2z"
      fill={color}
    />
  </svg>
);

export default RosePetals;