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
  // --- As purchased (2023, flat black) ---
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_black_tow_truck_front.JPEG", caption: "Day one: home on the hook, wearing its flat-black paint" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_dark_shadows_graffiti_night.JPEG", caption: "As purchased — the 'Dark Shadows' era" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_dark_shadows_graffiti_yard.JPEG", caption: "Black paint and graffiti, before the teardown began" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_dashboard_wiring_stripped.JPEG", caption: "Gauge cluster out, sorting six decades of wiring" },
  { project: "travco", src: "images/projects/1966 Dodge Travco/dodge_rv_original_weathered_paint_rear.JPEG", caption: "Black stripped away — down to the weathered original paint" },

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

  // --- A727 Torqueflite rebuild ---
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_removal_undercarriage_jack.JPEG", caption: "Coming down — the A727 on the transmission jack under the rig" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_removed_on_cart.JPEG", caption: "Out and on the cart, ready for teardown" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_pan_open_valve_body.JPEG", caption: "Pan off, valve body exposed" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_case_open_clutch_pack.JPEG", caption: "Case open — clutch drums and internals" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_valve_body_disassembled.JPEG", caption: "Valve body apart — every check ball and shuttle accounted for" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_valve_body_rebuild_internals.JPEG", caption: "Valve body internals during the rebuild" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_rebuild_seals_rings_kit.JPEG", caption: "Seals, rings, and springs from the teardown" },
  { project: "travco-transmission", src: "images/projects/1966 Dodge Travco/transmission/transmission_torque_converter_hub_closeup.JPEG", caption: "Torque converter hub, up close" },

  // --- Surf Tide Ventura 2 (Garmin Connect IQ) ---
  { project: "garmin-tide", src: "images/projects/Garmin Tide/hero.png", caption: "Surf Tide Ventura 2 — the full watch face concept" },
  { project: "garmin-tide", src: "images/projects/Garmin Tide/watch.png", caption: "Running on the Garmin Instinct 2" },
  { project: "garmin-tide", src: "images/projects/Garmin Tide/display.png", caption: "Tide graph, next tide, weather, body battery, sunrise/sunset" },
];
