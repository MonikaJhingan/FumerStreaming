export const videoReducer = (state, action) => {
   switch (action.type) {
     case "ALL":
       return {
         ...state,
         categories: {
           ...state.categories,
           all: true,
           football: false,
           tennis: false,
           hockey: false,
           cricket: false,
         },
       };
     case "CRICKET":
       return {
         ...state,
         categories: {
           ...state.categories,
           all: false,
           football: false,
           tennis: false,
           hockey: false,
           cricket: true,
         },
       };
     case "TENNIS":
       return {
         ...state,
         categories: {
           ...state.categories,
           all: false,
           football: false,
           tennis: true,
           hockey: false,
           cricket: false,
         },
       };
     case "HOCKEY":
       return {
         ...state,
         categories: {
           ...state.categories,
           all: false,
           football: false,
           tennis: false,
           hockey: true,
           cricket: false,
         },
       };
     case "FOOTBALL":
       return {
         ...state,
         categories: {
           ...state.categories,
           all: false,
           football: true,
           tennis: false,
           hockey: false,
           cricket: false,
         },
       };
       case "SEARCH_VIDEO":
        return {
          ...state,
          search: action.payload,
        };
     default:
       return { ...state };
   }
 };