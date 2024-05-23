import videoSrc from "../../assets/Videos/3129902-uhd_3840_2160_25fps.mp4";

function Resume() {
  return (
    <div className="flex justify-center items-center w-full">
      <video className="w-full lg:h-1/2 rounded-lg shadow-lg" autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Resume;
