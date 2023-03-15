import { User } from "@prisma/client";

export const images = [
  "https://cdn3d.iconscout.com/3d/premium/thumb/brainstorm-4500570-3735579.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/brainstorm-4500570-3735579.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/brainstorm-4500570-3735579.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/brainstorm-4500570-3735579.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/brainstorm-4500570-3735579.png",
];

export const fakeUsers: Array<Pick<User, "name" | "imageUrl">> = [
  {
    name: "Fellowship: Department of State Tech Fellowship",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Startup Funding: Julian Startup Accelerator",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Hackathon: United Nations Fintech Hackathon",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Travel Opp: Singapore Blockchain Ambassador Program",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Hackathon: Apple Hack Macathon",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Startup Funding: Edison Capital Accelerator",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
  {
    name: "Fellowship: Modular Fellowship",
    imageUrl: images[Math.floor(Math.random() * images.length)],
  },
];

export const fakePostBodies = [
  "Target🎯: ZkRollup Devs Value💰: $25k (USDC) Due Date⏰: 11/12/2024",
  "Target🎯: Designers Value💰: $15K (USDC) Due Date⏰: 05/11/2023",
  "Target🎯: All Devs Value💰: $2 Mil (USDC) Due Date⏰: Monthly Rolling Basis",
  "Target🎯: Backend Devs Value💰: $500K (USDC) Due Date⏰: 04/11/2023",
  "Target🎯: Project Managers Value💰: $12K Due Date⏰: 06/03/2023",
  "Target🎯: Students Value💰: $25k (USDC) Due Date⏰: 07/09/2023",
  "Target🎯: Startup Founders Value💰:$5 Mil (USDC) Due Date⏰: 08/05/2023",
  "Target🎯: Content Managers Value💰: NFT Credential Due Date⏰: 04/31/2023",
];
