import discordIcon from "../assets/discord-icon.png";
import robloxIcon from "../assets/roblox-icon.png";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://discord.com/users/763865903284617238" target="_blank" rel="noopener noreferrer">
        <img
          src={discordIcon}
          alt="Discord Icon"
          className="h-8 w-8 hover:scale-[1.1] transition-all duration-75"
        />
      </a>
      <a href="https://www.roblox.com/users/4028446365/profile" target="_blank" rel="noopener noreferrer">
        <img
          src={robloxIcon}
          alt="Roblox Icon"
          className="h-8 w-8 hover:scale-[1.1] transition-all duration-75"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
