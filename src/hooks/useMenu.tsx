import { Dashboard, Chats, UserSearch, UserTwo } from "@assets/index";
import { IMenu } from "@model/interface";

export const useMenu = () => {
  const menu: IMenu[] = [
    {
      logo: <Dashboard height="30" width="30" color="#718096" />,
      selectedLogo: <Dashboard color="#4C6FFF" height="30" width="30" />,
      link: "overview",
      name: "overview",
    },
    {
      logo: <UserTwo height="30" width="30" />,
      selectedLogo: <UserTwo color="#4C6FFF" height="30" width="30" />,
      link: "customers",
      name: "customers",
    },
    {
      logo: <Chats height="30" width="30" />,
      selectedLogo: <Chats color="#4C6FFF" height="30" width="30" />,
      link: "dispute-request",
      name: "dispute-request",
    },
    {
      logo: <UserSearch height="30" width="30" />,
      selectedLogo: <UserSearch color="#4C6FFF" height="30" width="30" />,
      link: "team-audit",
      name: "team-audit",
    },
  ];

  return { menu };
};
