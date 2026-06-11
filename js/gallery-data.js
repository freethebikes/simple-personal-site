/* ============================================================
   PROJECT PHOTOS — no database, just files + this list.
   To add a photo:
     1. Drop the image file in images/projects/
     2. Add a line to this array
     3. Commit and push

   Fields:
     project — which project gallery it belongs to
               (matches the data-gallery attribute in index.html;
               currently: "travco")
     src     — path to the image inside the repo
     caption — short description, shown on hover and in the lightbox

   Photos appear in the order listed. If a project has no photos,
   its gallery section stays hidden.
   ============================================================ */

const PROJECT_PHOTOS = [
  // Example — replace with your own:
  // { project: "travco", src: "images/projects/engine-bay.jpg", caption: "318 Poly V8 with the timing cover off" },
];
