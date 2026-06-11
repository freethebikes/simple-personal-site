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
  // --- As found ---
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_original_weathered_paint_rear.JPEG", caption: "As found: six decades of weathered original paint" },

  // --- Engine work ---
  { project: "travco", src: "images/projects/1966 Dodge Travco/v8_timing_chain_cover_removed.JPEG", caption: "318 Poly with the timing cover off — old chain and sprockets exposed" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/v8_engine_bay_front_view.JPEG", caption: "Engine bay, front view" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/v8_engine_bay_with_cooling_fan.JPEG", caption: "Cooling fan back on after the front-end rebuild" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/v8_engine_fan_front_angle.JPEG", caption: "Fan and accessory drive, front angle" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_interior_engine_hump_v8.JPEG", caption: "Doghouse open — the 318 lives between the seats" },

  // --- Paint ---
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_paint_prep_ladder_side.JPEG", caption: "Paint prep" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_white_primer_rear.JPEG", caption: "In primer" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_blue_stripe_painted_yard.JPEG", caption: "Fresh white with the blue stripe" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_blue_stripe_painted_garden.JPEG", caption: "Paint done" },

  // --- On the road ---
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_campsite_door_open.JPEG", caption: "First trips: camped with the door open" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_campsite_oak_tree.JPEG", caption: "Camped under the oaks" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_marina_front_view.JPEG", caption: "At the marina" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_sunset_ocean_parking_lot.JPEG", caption: "Sunset by the water" },
];
