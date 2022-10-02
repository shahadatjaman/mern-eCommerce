import { SocialMedia, Ul, Li, Icon } from "../ProductContent/Styles";

const SocialLink = ({ links }) => {
  return (
    <SocialMedia>
      <Ul>
        {links.share_link.map((social, index) => (
          <Li marginRight="40" key={index}>
            <Icon className={social.icon}></Icon>
          </Li>
        ))}
      </Ul>
    </SocialMedia>
  );
};

export default SocialLink;
