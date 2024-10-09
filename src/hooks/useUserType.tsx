import { Audit, Compliance,CustomerSupport,Dashboard,Monitoring,Sales,Users,Warning } from "../assets";

import { IMenu } from "../model/interface";

export const useUserType = () => {
    const userType: IMenu[] = [
      {
        logo: <CustomerSupport />,
        selectedLogo: <CustomerSupport color="#3754DB" />,
        label: "Customer Support",
        name: "Customer Support",
      },
      {
        logo: <Sales />,
        selectedLogo: <Sales color="#3754DB" />,
        label: "Sales & Marketing",
        name: "Sales & Marketing",
      },
      {
        logo: <Compliance />,
        selectedLogo: <Compliance color="#3754DB" />,
        label: "Compliance",
        name: "Compliance",
      },
      {
        logo: <Monitoring />,
        selectedLogo: <Monitoring color="#3754DB" />,
        label: "Fraud Monitoring",
        name: "Fraud Monitoring",
      },
      {
        logo: <Warning />,
        selectedLogo: <Warning color="#3754DB" />,
        label: "Risk Underwriting",
        name: "Risk Underwriting",
      },
      {
        logo: <Audit />,
        selectedLogo: <Audit color="#3754DB" />,
        label: "Audit & Control",
        name: "Audit & Control",
      },
      {
        logo: <Dashboard />,
        selectedLogo: <Dashboard color="#3754DB" />,
        label: "Management",
        name: "Management",
      },
      {
        logo: <Users />,
        selectedLogo: <Users color="#3754DB" />,
        label: "Admin",
        name: "Admin",
      },
    ];

    return {userType}
}