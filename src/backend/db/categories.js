import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    image: "https://images.unsplash.com/photo-1599982917650-21da4d09c437?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1252",
    altText: "cricket",
    title: "cricket",
    dispatch: "CRICKET",
  },
  {
    _id: uuid(),
    image: "https://images.unsplash.com/photo-1602674809970-89073c530b0a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    altText: "football",
    title: "football",
    dispatch: "FOOTBALL",
      },
  {
    _id: uuid(),
    image: "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174",
    altText: "tennis",
    title: "tennis",
    dispatch: "TENNIS",
  },
    {
      _id: uuid(),
      image: "https://images.unsplash.com/flagged/photo-1552244249-7d4517b72217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      altText: "hockey",
      title: "hockey",
      dispatch: "HOCKEY",
    },

];
