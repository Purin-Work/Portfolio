export type CertificateItem = {
  id: number;
  title: string;
  image: string;
  year: number;
};

export const certificates: CertificateItem[] = [
  {
    id: 1,
    title: "AWS Certified AI Practitioner",
    image: "/certificates/AWS Certified AI Practitioner.jpg",
    year: 2026,
  },
  {
    id: 2,
    title: "AI Governance & Ethics",
    image: "/certificates/AI-Governance-and-Ethics.jpg",
    year: 2025,
  },
  {
    id: 3,
    title: "Cybersecurity Foundation Course",
    image: "/certificates/Cybersecurity Foundation Course.jpg",
    year: 2025,
  },
  {
    id: 4,
    title: "Oracle Fusion Cloud Applications CX Certified Foundations Associate",
    image: "/certificates/Oracle Fusion Cloud Applications CX Certified Foundations Associate.jpg",
    year: 2025,
  },
  {
    id: 5,
    title: "Oracle Fusion Cloud Applications ERP Certified Foundations Associate",
    image: "/certificates/Oracle Fusion Cloud Applications ERP Certified Foundations Associate.jpg",
    year: 2025,
  },
];
