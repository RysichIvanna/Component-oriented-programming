import ResultModal from "./ResultModal";

export default {
  title: "Game/ResultModal",
  component: ResultModal,
  argTypes: {
    winner: { control: "text" },
    onRestart: { action: "restart_clicked" },
  },
};

export const PlayerWins = {
  args: {
    winner: "Ivanna",
  },
};

export const BotWins = {
  args: {
    winner: "Бот",
  },
};

export const Draw = {
  args: {
    winner: "Draw",
  },
};