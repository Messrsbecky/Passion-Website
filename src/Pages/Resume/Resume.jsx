import videoSrc from "../../assets/Videos/3129902-uhd_3840_2160_25fps.mp4";

function Resume() {
  return (
    <div>
      <video className="w-full lg:h-1/2" autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Resume;
