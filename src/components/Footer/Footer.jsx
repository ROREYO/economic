import './styles.scss';

import VkSvg from '../../img/footer/vk.svg';
import GithubSvg from '../../img/footer/github.svg';
import TelegramSvg from '../../img/footer/telegram.svg';
import LinkedinSvg from '../../img/footer/linkedin.svg';
import InstagramSvg from '../../img/footer/instagram.svg';

export const Footer = () => {
  return (
    <div className="footer">
      <a href="https://vk.com/sotnya_rek" target="_blank" rel="noreferrer">
        <img src={VkSvg} alt="VK" />
      </a>
      <a href="https://github.com/ROREYO" target="_blank" rel="noreferrer">
        <img src={GithubSvg} alt="GitHub" />
      </a>
      <a href="https://t.me/rey_0o0" target="_blank" rel="noreferrer">
        <img src={TelegramSvg} alt="Telegram" />
      </a>
      <a href="https://www.linkedin.com/in/dmitry-dyak-a44b07253/" target="_blank" rel="noreferrer">
        <img src={LinkedinSvg} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/sotnya_rek/" target="_blank" rel="noreferrer">
        <img src={InstagramSvg} alt="instagram" />
      </a>
    </div>
  );
};
