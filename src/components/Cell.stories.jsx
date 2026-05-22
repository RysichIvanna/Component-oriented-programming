import Cell from "./Cell";

export default {
  title: "Game/Cell",
  component: Cell,
  argTypes: {
    value: { control: "select", options: ["X", "O", null] },
    onClick: { action: "clicked" },
  },
};

export const Empty = {
  args: {
    value: null,
  },
};

export const Cross = {
  args: {
    value: "X",
  },
};

export const Zero = {
  args: {
    value: "O",
  },
};