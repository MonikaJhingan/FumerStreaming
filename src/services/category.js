export const category = (videos, categories) => {
   const { cricket, football, tennis, hockey, all } = categories;
 
   if (cricket) {
     const cricketVideos = videos.filter(
       (video) => video.category === "cricket"
     );
     return cricketVideos;
   }
   if (football) {
     const footballVideos = videos.filter(
       (video) => video.category === "football"
     );
     return footballVideos;
   }
   if (tennis) {
     const tennisVideos = videos.filter(
       (video) => video.category === "tennis"
     );
     return tennisVideos;
   }
   if (hockey) {
     const hockeyVideos = videos.filter((video) => video.category === "hockey");
     return hockeyVideos;
   }
   if (all) {
     return videos;
   }
   return videos;
 };