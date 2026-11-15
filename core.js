(function () {
'use strict';

/* ================= words ================= */
const T = {
en: {
  pay_due: 'Amount to pay', pay_at_shop: 'Pay at the shop when you collect your vehicle.',
  privacy: 'Privacy policy', book_privacy: 'By booking you agree to our {p}.',
  install_btn: 'Install app', install_bar: 'Install this app on your phone. It opens from your home screen, no app store needed.', install_title: 'Install the app',
  install_ios_1: 'Tap the Share button (the square with an arrow) in the browser toolbar.', install_ios_2: 'Scroll down and tap "Add to Home Screen".', install_ios_3: 'Tap "Add". The app icon appears on your home screen.',
  install_and_1: 'Tap the ⋮ menu at the top right of Chrome.', install_and_2: 'Tap "Install app" or "Add to Home screen".', install_and_3: 'Tap "Install". The app icon appears on your home screen.',
  install_pc: 'In Chrome or Edge, click the install icon at the right end of the address bar, or open the ⋮ menu and choose "Install".',
  install_inapp: 'The browser inside LINE and Facebook can\'t install apps. Open this page in your phone\'s browser first.', install_fb: 'In Facebook or Instagram: tap ⋯ at the top right, then "Open in browser".',
  open_browser: 'Open in browser', installed: 'App installed', not_now: 'Not now',
  apps_title: 'Get the apps', apps_note: 'Scan a code to open the app, then install it. Copied links open in the phone\'s browser even when tapped in LINE.',
  apps_for_customer: 'For customers: booking and tracking', apps_for_worker: 'For mechanics and front desk', apps_for_owner: 'For the owner', copy_link: 'Copy link', share: 'Share',
  msg_link: 'Track it here: {u}',
  proof_title: 'Parts proof', proof_intro: 'Every part we replaced: the old part, the new part in its box, and the new part fitted.', proof_none: 'No parts replaced yet.',
  photo_old: 'Old part, removed', photo_box: 'New part in its box: brand label and part number visible', photo_fitted: 'New part fitted on the vehicle',
  cap_old: 'Old part', cap_box: 'New part & box', cap_fitted: 'Fitted', need_three: 'Take all 3 photos and pick the part type.',
  fit_intro2: 'This proof is shown to the customer on their tracking page.', part_brand: 'Brand', part_no: 'Part number', ptype: 'Part type',
  pt_genuine: 'Genuine (OEM)', pt_aftermarket: 'Aftermarket brand', pt_used: 'Used part', old_handling: 'Old part',
  old_return: 'Give back to customer', old_dispose: 'Shop disposes of it', old_status_return: 'Old part kept for you: collect it at pickup',
  old_status_given: 'Old part given back to you {d}', old_status_dispose: 'Old part disposed of by the shop', fitted_by: 'Fitted {d} by {m}',
  old_to_give: 'Old parts to give back', mark_given: 'Given to customer', ev_old_given: 'Old parts given back to customer',
  odo_title: 'Mileage & fuel', odo_in: 'Drop-off', odo_out: 'Pickup', odo_record_in: 'Record drop-off', odo_record_out: 'Record pickup',
  odo_photo: 'Dashboard photo: odometer and fuel gauge', odo_km: 'Odometer (km)', fuel: 'Fuel', odo_need: 'Add the photo, the km reading and the fuel level.',
  odo_hint: 'Dashboard photo at drop-off and at pickup.', ev_odo_in: 'Drop-off mileage: {km} km', ev_odo_out: 'Pickup mileage: {km} km',
  odo_out_first: 'No pickup mileage and fuel photo yet.', km_driven: '{n} km driven while at the shop', not_yet: 'Not recorded yet',
  app_customer: 'Customer app', app_worker: 'Workers app', app_owner: 'Owner app', badge_worker: 'Staff', badge_owner: 'Owner',
  wrong_app: 'This account uses a different app', wrong_app_owner: 'This app is for the shop owner. Mechanics and front desk use the Workers app.', wrong_app_worker: 'This app is for mechanics and front desk.',
  owner_signin: 'Owner sign in', owner_signin_sub: 'Dashboard, approvals, reports, stock and settings.', nav_shop: 'Shop', shop_hours: 'Opening hours', closed_on_d: 'Closed on {d}',
  no_account_owner: 'First time here? Create the owner account', call_shop: 'Call the shop', directions: 'Directions', svc_prices: 'Services and prices', book_now: 'Book a repair', price_check: 'After check',
  from_note: 'Starting prices. The mechanic confirms the final price before any work starts.', sync_offline: 'Offline: changes will sync', slot_taken: 'That time was just taken. Please pick another.', too_many: 'You already have 3 bookings waiting. Please call the shop.', offline_try: 'No internet connection. Try again in a moment.',
  pending_title: 'Waiting for approval', pending_sub: 'The owner needs to give your account a role before you can use the shop screens.', sign_out: 'Sign out', staff_btn: 'Staff',
  staff_signin: 'Staff sign in', staff_signin_sub: 'For mechanics, front desk and the owner.', create_staff: 'Create staff account', create_staff_sub: 'The owner gives you a role after you sign up.',
  email: 'Email', password: 'Password (6+ characters)', sign_in: 'Sign in', have_account: 'I already have an account', no_account: 'New staff? Create an account',
  auth_need: 'Enter your email and a password of at least 6 characters.', check_email: 'Check your email to confirm the account, then sign in.', bad_login: 'Wrong email or password.',
  staff: 'Staff accounts', staff_hint: 'New staff create an account with the Staff button, then you choose their role here.', role: 'Role', role_pending: 'Waiting',
  track_code: 'Booking code', track_phone: 'Phone number', track_sub2: 'Enter your booking code and the phone number you booked with.', tagline: 'Motorbike & car repair', role_customer: 'Customer', role_mechanic: 'Mechanic', role_desk: 'Front desk', role_owner: 'Owner', branch: 'Branch',
  sync_live: 'Live, synced', sync_connecting: 'Connecting…', sync_local: 'Saved on this device only', sync_stale: "Can't reach saved data yet", sync_error: 'Saved data unavailable',
  nav_book: 'Book', nav_track: 'Track', nav_myjobs: 'My jobs', nav_stock: 'Stock', nav_today: 'Today', nav_board: 'Jobs', nav_newjob: 'New job', nav_dash: 'Dashboard', nav_reports: 'Reports', nav_settings: 'Settings',
  vt_bike: 'Motorbike', vt_car: 'Car', vtype: 'Vehicle type', brand: 'Brand', model: 'Model', model_ph_bike: 'e.g. Click 160, PCX, NMAX', model_ph_car: 'e.g. Yaris, Vios, D-Max',
  year: 'Year', vin: 'VIN (chassis no.)', mileage: 'Mileage (km)', plate: 'Number plate', plate_series: 'Letters', plate_number: 'Number', plate_province: 'Province', other: 'Other',
  book_title: 'Book a repair', book_sub: 'Pick a service and a time. The shop confirms by LINE or phone.',
  sec_service: 'What do you need?', sec_vehicle: 'Your vehicle', sec_problem: "What's wrong?", sec_when: 'When?', sec_you: 'Your details',
  problem_ph: 'e.g. Brakes squeak, hard to start in the morning', add_photo: 'Add a photo', change_photo: 'Change photo', remove: 'Remove',
  name: 'Name', phone: 'Phone', line_id: 'LINE ID (optional)', from_price: 'from ฿{p}', quote_after: 'Price after check', slot_full: 'Full', slots_left: '{n} free',
  pick_day: 'Pick a day to see free times.', no_slots: 'No free times on this day.', submit_book: 'Book this time', need: 'Please add: {f}', day: 'day', time: 'time', service: 'service', service_lbl: 'Service',
  booked_title: "You're booked in", booked_sub: 'Keep this code. Use it to track your repair.', booking_code: 'Booking code', track_this: 'Track this repair', copy_details: 'Copy details', book_another: 'Book another vehicle', copied: 'Copied',
  track_title: 'Track your repair', track_sub: 'Enter your booking code or phone number.', track_ph: 'MB-1234 or 081 234 5678', find: 'Find',
  not_found: 'No repair found for "{q}". Check the code and try again.', your_repairs: 'Your repairs', booked_for: 'Booked for', shop_contact: 'Questions? Contact the shop', progress: 'Progress',
  st_booked: 'Booked', st_received: 'Received', st_inspection: 'Inspection', st_approval: 'Waiting for approval', st_approval_c: 'Waiting for your approval', st_approved: 'Approved',
  st_parts_wait: 'Waiting for parts', st_in_progress: 'In progress', st_parts_replaced: 'Parts replaced', st_qc: 'Quality check', st_ready: 'Ready for pickup', st_completed: 'Completed', st_cancelled: 'Cancelled',
  col_checkin: 'Check-in & inspection', col_parts: 'Approved & parts',
  new_updates: '{n} new since your last visit', est_title: 'Estimate', est_extra: 'Extra work found',
  est_intro: 'Approve or decline each item. Work starts only on what you approve.', yes: 'Approve', no: 'Decline', approve_all: 'Approve all', send_answer: 'Send my answer',
  answer_all: 'Choose approve or decline for every item.', answer_sent: 'Thanks. The shop has your answer.',
  ls_proposed: 'Waiting for OK', ls_approved: 'Approved', ls_declined: 'Declined', new_item: 'New',
  inspection_report: 'Inspection report', r_green: 'Good', r_yellow: 'Needs attention soon', r_red: 'Urgent', rb_green: 'OK', rb_yellow: 'Soon', rb_red: 'Urgent',
  dvi_sum: '{r} urgent · {y} soon · {g} OK', photos: 'Photos', before: 'Before', after: 'After', no_photos: 'No photos yet.',
  chat: 'Messages', chat_ph: 'Write a message', send: 'Send', no_chat: 'No messages yet. Ask the shop anything here.',
  invoice: 'Invoice', pay_now: 'Pay with PromptPay', scan_pay: 'Scan with any Thai banking app. The shop confirms when the money arrives.',
  paid: 'Paid', due: 'To pay', discount: 'Discount', subtotal: 'Subtotal', vat: 'VAT 7%', total: 'Total', fully_paid: 'Paid in full',
  history_veh: 'Service history', no_history: 'No earlier visits.', updates: 'Updates from the mechanic', no_updates: 'No updates yet. Notes and photos from the mechanic show here.',
  iam: 'I am', pick_me: 'Pick your name to see your jobs.', my_jobs: 'My jobs', unassigned_jobs: 'Not assigned yet', take_job: 'Take this job', no_my_jobs: 'No jobs assigned to you right now.',
  act_start_insp: 'Start inspection', act_insp_done: 'Inspection done', insp_done_wait: 'Inspection done. Front desk sends the estimate to the customer.',
  wait_customer: 'Waiting for the customer to approve.', act_start_repair: 'Start repair', act_wait_parts: 'Waiting for parts', act_to_qc: 'Repair done: quality check',
  act_parts_done: 'Parts replaced: quality check', act_qc_pass: 'Passed QC: ready for pickup', act_checkin: 'Check in', act_complete: 'Hand over & complete',
  unfitted_warn: '{n} approved parts are not marked as fitted. Move on anyway?', go_on: 'Move on', ready_wait: 'Ready. Waiting for the customer to collect.',
  timer: 'Time on this job', start: 'Start', stop: 'Stop', logged: 'Logged {h}', running: 'Running', tasks: 'Tasks', add_task: 'Add', task_ph: 'e.g. Check rear wheel bearing',
  tab_work: 'Work', tab_overview: 'Overview', tab_inspect: 'Inspection', tab_parts: 'Parts & labour', tab_photos: 'Photos', tab_chat: 'Messages', tab_pay: 'Payment', tab_history: 'History',
  dvi_tyre_f: 'Front tyre', dvi_tyre_r: 'Rear tyre', dvi_brake_f: 'Front brake', dvi_brake_r: 'Rear brake', dvi_drive: 'Chain / belt & sprockets', dvi_oil: 'Engine oil', dvi_battery: 'Battery',
  dvi_lights: 'Lights & indicators', dvi_suspension: 'Suspension', dvi_cables: 'Throttle & clutch cables', dvi_leaks: 'Oil & fluid leaks', dvi_tyres: 'Tyres', dvi_brakes: 'Brake pads & discs',
  dvi_coolant: 'Coolant', dvi_wipers: 'Wipers', dvi_belts: 'Belts & hoses', dvi_aircon: 'Air conditioning',
  dvi_note_ph: 'Note (optional)', save_notes: 'Save notes', dvi_start: 'Start the inspection to fill in the checklist.',
  part: 'Part', labour: 'Labour', qty: 'Qty', hours: 'Hours', price: 'Price ฿', desc: 'Item', add_line: 'Add',
  add_from_stock: 'Add part from stock', search_stock_ph: 'Name, SKU or scan barcode', in_stock: '{n} in stock', out_of_stock: 'Out of stock',
  custom_part: 'Part not in stock', add_labour: 'Add labour', s_reserved: 'Reserved', s_needed: 'Needed', s_fitted: 'Fitted',
  reserve: 'Reserve', fit: 'Fit part', need_part: 'Mark needed', unreserve: 'Unreserve',
  fit_title: 'Fit: {p}', fit_intro: 'Take a clear photo of the old part and the area before, and of the new part fitted after.',
  photo_before: 'Before: old part & area', photo_after: 'After: new part fitted', need_both: 'Both photos are needed.', confirm_fit: 'Confirm fitted',
  not_enough: 'Not enough stock. Marked as needed.', extra_note: 'New items go to the customer for approval.',
  send_est: 'Send estimate to customer', send_extra: 'Send new items for approval', est_sent: 'Sent. Waiting for the customer.',
  convert: 'Customer agreed by phone: make it a repair order', doc_estimate: 'Estimate', doc_ro: 'Repair order',
  big_job_pending: 'Over {a}. Waiting for the owner to approve before it goes to the customer.', disc_pct: 'Discount %', apply: 'Apply',
  disc_pending: 'Discount {p}% waiting for owner approval', disc_applied: 'Discount {p}% applied', disc_rejected: 'Owner rejected the {p}% discount',
  est_total: 'Estimate total', no_lines: 'No parts or labour yet.', price_later: 'Front desk sets the price',
  take_payment: 'Take payment', pm_cash: 'Cash', pm_card: 'Card', pm_transfer: 'Bank transfer', pm_promptpay: 'PromptPay QR', amount: 'Amount ฿', record: 'Record payment',
  no_pp: 'Add your PromptPay number in Settings to show a QR code.', qr_offline: "QR code couldn't load. PromptPay {id}, amount {a}.", payments: 'Payments',
  copy_invoice: 'Copy invoice text', copy_msg: 'Copy message for customer', thanks: 'Thank you',
  appointments: 'Appointments', no_appts: 'No appointments this day.', attention: 'Needs attention', nothing: 'Nothing waiting.',
  att_answered: 'Customer answered the estimate', att_chat: 'New message from customer', att_dvi: 'Inspection done: send the estimate', att_parts: 'Parts needed',
  att_extra: 'New items to send for approval', ready_pickup: 'Ready for pickup', due_amt: '{a} to pay', in_shop_now: '{n} vehicles in the shop',
  board: 'Board', list: 'List', search_ph: 'Name, phone, plate, VIN or job no.', all_jobs: 'All jobs',
  newjob_title: 'New job', here_now: 'Vehicle is here now', book_later: 'Book for later', date: 'Date', mechanic: 'Mechanic', unassigned: 'Not assigned', customer: 'Customer', problem: 'Problem',
  create_job: 'Open job', stock_title: 'Stock', f_all: 'All', f_low: 'Low stock', f_needed: 'Needed for jobs',
  on_hand: 'On hand', reserved: 'Reserved', available: 'Available', reorder_at: 'Reorder at', reorder_qty: 'Reorder qty', cost: 'Cost ฿', sell: 'Price ฿', margin: 'Margin',
  sku: 'SKU', barcode: 'Barcode', category: 'Category', fits: 'Fits', fits_both: 'Both', shelf: 'Shelf', supplier: 'Supplier', part_name: 'Part name', add_part: 'Add part', new_part: 'New part',
  reorder_title: 'Reorder suggestions', suggest: 'Order {q}', copy_order: 'Copy order list', receive: 'Receive stock', count: 'Stock count', counted: 'Counted qty', unit_cost: 'Unit cost ฿',
  stock_hist: 'Stock history', mv_receive: 'Received', mv_use: 'Used on {r}', mv_adjust: 'Count adjustment', reserved_for: 'Reserved for jobs', low: 'Low', no_parts: 'No parts match.',
  scan_hint: 'A USB or Bluetooth barcode scanner works here: scan and the part opens.', save: 'Save', saved: 'Saved', back: 'Back', cancel: 'Cancel', del: 'Delete', close: 'Close',
  cat_oil: 'Oils', cat_brakes: 'Brakes', cat_tyres: 'Tyres', cat_electrical: 'Electrical', cat_engine: 'Engine', cat_drive: 'Drive', cat_filters: 'Filters', cat_body: 'Body', cat_other: 'Other',
  k_inshop: 'In the shop', k_revenue: 'Revenue today', k_pending: 'Pending approvals', k_low: 'Low stock items', k_eff: 'Tech efficiency, week',
  your_approvals: 'Needs your approval', appr_disc: '{r}: {p}% discount (−{a})', appr_big: '{r}: estimate {a}', approve: 'Approve', reject: 'Reject',
  working: 'Who is working on what', idle: 'No timer running', jobs_n: '{n} active jobs',
  p_today: 'Today', p_week: 'This week', p_month: 'This month', pl: 'Profit & loss', revenue: 'Revenue (payments)', vat_col: 'VAT in payments', parts_cost: 'Parts cost',
  gross: 'Gross profit', expenses: 'Expenses', net: 'Net profit', by_method: 'Payments by method', jobs_done: 'Jobs completed', aro: 'Average repair order',
  tech_prod: 'Technician productivity', h_clocked: 'Clocked', h_billed: 'Billed', eff: 'Efficiency', parts_profit: 'Parts profitability', sold: 'Sold', profit: 'Profit',
  invoices: 'Invoices', add_expense: 'Add expense', note: 'Note', no_data: 'Nothing in this period yet.',
  ex_rent: 'Rent', ex_wages: 'Wages', ex_utilities: 'Electricity & water', ex_tools: 'Tools', ex_supplies: 'Shop supplies', ex_other: 'Other',
  settings_title: 'Shop settings', settings_note: 'Customers see your name, phone and LINE in the app.', shop_name: 'Shop name', shop_phone: 'Shop phone', shop_line: 'Shop LINE ID', address: 'Address or area',
  mechanics: 'Mechanics (separate with commas)', labour_rate: 'Labour rate, ฿ per hour', per_slot: 'Vehicles per time slot', opening: 'Opening hours', opens: 'Opens', closes: 'Closes',
  closed_day: 'Closed on', none: 'Open every day', vat_on: 'Add VAT 7% to estimates and invoices', promptpay: 'PromptPay number (phone or tax ID)',
  big_job: 'Owner approves estimates over ฿', disc_limit: 'Owner approves discounts over %', branches: 'Branches (separate with commas)',
  prices: 'Starting prices, motorbike / car (0 = price after check)', clear_examples: 'Remove example data', confirm_examples: 'Remove all example jobs, stock, payments and expenses?',
  demo_roles: 'In this version anyone can switch roles. Sign-in for each person comes with the production version.',
  read_only: 'You can view this app but not change it.', err_quota: 'Storage is full. Delete old data, then try again.', err_save: "Couldn't save. Check your connection and try again.",
  err_photo: "Couldn't read that photo. Try another one.", copy_fail: 'Copy this text:', today: 'Today', tomorrow: 'Tomorrow', walkin: 'Walk-in', confirm_delete: 'Delete job {r}? This cannot be undone.', delete_job: 'Delete job',
  sv_oil: 'Oil change', sv_service: 'Full service', sv_tyres: 'Tyres', sv_brakes: 'Brakes', sv_chain: 'Chain & sprockets', sv_aircon: 'Air conditioning', sv_electrical: 'Electrics & battery',
  sv_engine: 'Engine repair', sv_body: 'Accident & bodywork', sv_other: 'Something else',
  ev_est_sent: 'Estimate sent: {a}', ev_est_answer: 'Customer approved {y} of {n} items', ev_converted: 'Made a repair order (customer agreed by phone)', ev_fitted: 'Fitted: {p}',
  ev_dvi_done: 'Inspection done', ev_paid: 'Payment {a} ({m})', ev_needed: 'Part needed: {p}', ev_big_ok: 'Owner approved the estimate', ev_disc: 'Discount {p}%: {s}',
  by_customer: 'customer', msg_hi: 'Hi {n},', msg_body: 'your {b} is now: {s}.', msg_code: 'Job {r}. Track it in our app with this code.', msg_total: 'Total {t}.',
  update_ph: 'e.g. Rear pads worn, replacing now', logo: 'Shop logo', logo_hint: 'PNG with a transparent background looks best.', front_desk: 'Front desk', time_h: '{h} h', est_waiting_owner: 'Waiting for owner', who: 'Who', none_short: '—'
},
th: {
  pay_due: 'ยอดที่ต้องชำระ', pay_at_shop: 'ชำระเงินที่ร้านตอนรับรถ',
  privacy: 'นโยบายความเป็นส่วนตัว', book_privacy: 'การจองถือว่าคุณยอมรับ{p}ของเรา',
  install_btn: 'ติดตั้งแอป', install_bar: 'ติดตั้งแอปนี้บนมือถือ เปิดจากหน้าจอโฮมได้เลย ไม่ต้องโหลดจาก Store', install_title: 'ติดตั้งแอป',
  install_ios_1: 'แตะปุ่มแชร์ (สี่เหลี่ยมมีลูกศรชี้ขึ้น) ในแถบเครื่องมือของเบราว์เซอร์', install_ios_2: 'เลื่อนลงแล้วแตะ "เพิ่มไปยังหน้าจอโฮม"', install_ios_3: 'แตะ "เพิ่ม" ไอคอนแอปจะอยู่บนหน้าจอโฮม',
  install_and_1: 'แตะเมนู ⋮ มุมขวาบนของ Chrome', install_and_2: 'แตะ "ติดตั้งแอป" หรือ "เพิ่มลงในหน้าจอหลัก"', install_and_3: 'แตะ "ติดตั้ง" ไอคอนแอปจะอยู่บนหน้าจอหลัก',
  install_pc: 'ใน Chrome หรือ Edge คลิกไอคอนติดตั้งทางขวาของช่องที่อยู่เว็บ หรือเปิดเมนู ⋮ แล้วเลือก "ติดตั้ง"',
  install_inapp: 'เบราว์เซอร์ใน LINE และ Facebook ติดตั้งแอปไม่ได้ เปิดหน้านี้ในเบราว์เซอร์ของมือถือก่อน', install_fb: 'ใน Facebook หรือ Instagram: แตะ ⋯ มุมขวาบน แล้วเลือก "เปิดในเบราว์เซอร์"',
  open_browser: 'เปิดในเบราว์เซอร์', installed: 'ติดตั้งแอปแล้ว', not_now: 'ไว้ทีหลัง',
  apps_title: 'ลิงก์และ QR ของแอป', apps_note: 'สแกน QR เพื่อเปิดแอป แล้วกดติดตั้ง ลิงก์ที่คัดลอกจากตรงนี้จะเปิดในเบราว์เซอร์ของมือถือ แม้กดจาก LINE',
  apps_for_customer: 'สำหรับลูกค้า: จองคิวและติดตามงาน', apps_for_worker: 'สำหรับช่างและหน้าร้าน', apps_for_owner: 'สำหรับเจ้าของร้าน', copy_link: 'คัดลอกลิงก์', share: 'แชร์',
  msg_link: 'ติดตามงานได้ที่: {u}',
  proof_title: 'หลักฐานการเปลี่ยนอะไหล่', proof_intro: 'อะไหล่ทุกชิ้นที่เราเปลี่ยน: อะไหล่เก่า อะไหล่ใหม่พร้อมกล่อง และรูปหลังติดตั้ง', proof_none: 'ยังไม่ได้เปลี่ยนอะไหล่',
  photo_old: 'อะไหล่เก่าที่ถอดออก', photo_box: 'อะไหล่ใหม่พร้อมกล่อง เห็นยี่ห้อและรหัสอะไหล่', photo_fitted: 'อะไหล่ใหม่ที่ติดตั้งแล้ว',
  cap_old: 'อะไหล่เก่า', cap_box: 'อะไหล่ใหม่และกล่อง', cap_fitted: 'ติดตั้งแล้ว', need_three: 'ถ่ายรูปให้ครบ 3 รูป และเลือกประเภทอะไหล่',
  fit_intro2: 'หลักฐานนี้จะแสดงให้ลูกค้าเห็นในหน้าติดตามงาน', part_brand: 'ยี่ห้อ', part_no: 'รหัสอะไหล่', ptype: 'ประเภทอะไหล่',
  pt_genuine: 'แท้ศูนย์', pt_aftermarket: 'อะไหล่เทียบ (ยี่ห้ออื่น)', pt_used: 'อะไหล่มือสอง', old_handling: 'อะไหล่เก่า',
  old_return: 'คืนให้ลูกค้า', old_dispose: 'ร้านทิ้งให้', old_status_return: 'เก็บอะไหล่เก่าไว้ให้คุณ รับได้ตอนรับรถ',
  old_status_given: 'คืนอะไหล่เก่าให้คุณแล้ว {d}', old_status_dispose: 'ร้านทิ้งอะไหล่เก่าให้แล้ว', fitted_by: 'ติดตั้ง {d} โดย {m}',
  old_to_give: 'อะไหล่เก่าที่ต้องคืนลูกค้า', mark_given: 'คืนลูกค้าแล้ว', ev_old_given: 'คืนอะไหล่เก่าให้ลูกค้าแล้ว',
  odo_title: 'เลขไมล์และน้ำมัน', odo_in: 'ตอนรับรถ', odo_out: 'ตอนส่งมอบ', odo_record_in: 'บันทึกตอนรับรถ', odo_record_out: 'บันทึกตอนส่งมอบ',
  odo_photo: 'รูปหน้าปัด: เลขไมล์และเกจน้ำมัน', odo_km: 'เลขไมล์ (กม.)', fuel: 'น้ำมัน', odo_need: 'ใส่รูป เลขไมล์ และระดับน้ำมันให้ครบ',
  odo_hint: 'ถ่ายรูปหน้าปัดตอนรับรถและตอนส่งมอบ', ev_odo_in: 'เลขไมล์ตอนรับรถ: {km} กม.', ev_odo_out: 'เลขไมล์ตอนส่งมอบ: {km} กม.',
  odo_out_first: 'ยังไม่ได้ถ่ายรูปเลขไมล์และน้ำมันตอนส่งมอบ', km_driven: 'วิ่งเพิ่ม {n} กม. ระหว่างอยู่ที่ร้าน', not_yet: 'ยังไม่ได้บันทึก',
  app_customer: 'แอปลูกค้า', app_worker: 'แอปพนักงาน', app_owner: 'แอปเจ้าของ', badge_worker: 'พนักงาน', badge_owner: 'เจ้าของ',
  wrong_app: 'บัญชีนี้ใช้กับแอปอื่น', wrong_app_owner: 'แอปนี้สำหรับเจ้าของร้าน ช่างและหน้าร้านใช้แอปพนักงาน', wrong_app_worker: 'แอปนี้สำหรับช่างและหน้าร้าน',
  owner_signin: 'เจ้าของร้านเข้าสู่ระบบ', owner_signin_sub: 'ภาพรวม การอนุมัติ รายงาน สต็อก และการตั้งค่า', nav_shop: 'ร้าน', shop_hours: 'เวลาเปิดทำการ', closed_on_d: 'ปิดทุก{d}',
  no_account_owner: 'ใช้งานครั้งแรก? สร้างบัญชีเจ้าของร้าน', call_shop: 'โทรหาร้าน', directions: 'นำทาง', svc_prices: 'บริการและราคา', book_now: 'จองคิวซ่อม', price_check: 'หลังตรวจ',
  from_note: 'ราคาเริ่มต้น ช่างจะแจ้งราคาจริงก่อนเริ่มงานทุกครั้ง', sync_offline: 'ออฟไลน์ จะซิงก์เมื่อมีอินเทอร์เน็ต', slot_taken: 'เวลานี้เพิ่งเต็ม กรุณาเลือกเวลาอื่น', too_many: 'คุณมีการจองที่รออยู่ 3 รายการแล้ว กรุณาโทรหาร้าน', offline_try: 'ไม่มีอินเทอร์เน็ต ลองใหม่อีกครั้ง',
  pending_title: 'รอการอนุมัติ', pending_sub: 'เจ้าของร้านต้องกำหนดบทบาทให้บัญชีของคุณก่อนจึงจะใช้งานหน้าร้านได้', sign_out: 'ออกจากระบบ', staff_btn: 'พนักงาน',
  staff_signin: 'พนักงานเข้าสู่ระบบ', staff_signin_sub: 'สำหรับช่าง หน้าร้าน และเจ้าของร้าน', create_staff: 'สร้างบัญชีพนักงาน', create_staff_sub: 'เจ้าของร้านจะกำหนดบทบาทให้หลังจากสมัคร',
  email: 'อีเมล', password: 'รหัสผ่าน (6 ตัวขึ้นไป)', sign_in: 'เข้าสู่ระบบ', have_account: 'มีบัญชีอยู่แล้ว', no_account: 'พนักงานใหม่? สร้างบัญชี',
  auth_need: 'กรอกอีเมลและรหัสผ่านอย่างน้อย 6 ตัว', check_email: 'ตรวจสอบอีเมลเพื่อยืนยันบัญชี แล้วเข้าสู่ระบบ', bad_login: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
  staff: 'บัญชีพนักงาน', staff_hint: 'พนักงานใหม่สร้างบัญชีจากปุ่มพนักงาน แล้วคุณเลือกบทบาทให้ที่นี่', role: 'บทบาท', role_pending: 'รออนุมัติ',
  track_code: 'รหัสการจอง', track_phone: 'เบอร์โทรศัพท์', track_sub2: 'ใส่รหัสการจองและเบอร์โทรที่ใช้จอง', tagline: 'ซ่อมมอเตอร์ไซค์และรถยนต์', role_customer: 'ลูกค้า', role_mechanic: 'ช่าง', role_desk: 'หน้าร้าน', role_owner: 'เจ้าของ', branch: 'สาขา',
  sync_live: 'ออนไลน์ ซิงก์แล้ว', sync_connecting: 'กำลังเชื่อมต่อ…', sync_local: 'บันทึกในเครื่องนี้เท่านั้น', sync_stale: 'ยังโหลดข้อมูลไม่ได้', sync_error: 'โหลดข้อมูลไม่ได้',
  nav_book: 'จองคิว', nav_track: 'ติดตามงาน', nav_myjobs: 'งานของฉัน', nav_stock: 'สต็อก', nav_today: 'วันนี้', nav_board: 'งานซ่อม', nav_newjob: 'เปิดงาน', nav_dash: 'ภาพรวม', nav_reports: 'รายงาน', nav_settings: 'ตั้งค่า',
  vt_bike: 'มอเตอร์ไซค์', vt_car: 'รถยนต์', vtype: 'ประเภทรถ', brand: 'ยี่ห้อ', model: 'รุ่น', model_ph_bike: 'เช่น Click 160, PCX, NMAX', model_ph_car: 'เช่น Yaris, Vios, D-Max',
  year: 'ปี', vin: 'เลขตัวถัง (VIN)', mileage: 'เลขไมล์ (กม.)', plate: 'ทะเบียนรถ', plate_series: 'หมวดอักษร', plate_number: 'เลขทะเบียน', plate_province: 'จังหวัด', other: 'อื่นๆ',
  book_title: 'จองคิวซ่อมรถ', book_sub: 'เลือกบริการและเวลา ร้านจะยืนยันทาง LINE หรือโทรกลับ',
  sec_service: 'ต้องการบริการอะไร', sec_vehicle: 'รถของคุณ', sec_problem: 'อาการเป็นอย่างไร', sec_when: 'วันและเวลา', sec_you: 'ข้อมูลติดต่อ',
  problem_ph: 'เช่น เบรกมีเสียงดัง สตาร์ทติดยากตอนเช้า', add_photo: 'แนบรูป', change_photo: 'เปลี่ยนรูป', remove: 'ลบ',
  name: 'ชื่อ', phone: 'เบอร์โทร', line_id: 'LINE ID (ไม่บังคับ)', from_price: 'เริ่ม ฿{p}', quote_after: 'ประเมินราคาหลังตรวจ', slot_full: 'เต็ม', slots_left: 'ว่าง {n}',
  pick_day: 'เลือกวันก่อน แล้วจะเห็นเวลาที่ว่าง', no_slots: 'ไม่มีเวลาว่างในวันนี้', submit_book: 'ยืนยันการจอง', need: 'กรุณาเลือก/กรอก: {f}', day: 'วัน', time: 'เวลา', service: 'บริการ', service_lbl: 'บริการ',
  booked_title: 'จองคิวเรียบร้อย', booked_sub: 'เก็บรหัสนี้ไว้ ใช้ติดตามงานซ่อมของคุณ', booking_code: 'รหัสการจอง', track_this: 'ติดตามงานซ่อมนี้', copy_details: 'คัดลอกรายละเอียด', book_another: 'จองคิวรถคันอื่น', copied: 'คัดลอกแล้ว',
  track_title: 'ติดตามงานซ่อม', track_sub: 'ใส่รหัสการจองหรือเบอร์โทรศัพท์', track_ph: 'MB-1234 หรือ 081 234 5678', find: 'ค้นหา',
  not_found: 'ไม่พบงานซ่อมสำหรับ "{q}" กรุณาตรวจสอบอีกครั้ง', your_repairs: 'งานซ่อมของคุณ', booked_for: 'นัดวันที่', shop_contact: 'สอบถามเพิ่มเติม ติดต่อร้าน', progress: 'ความคืบหน้า',
  st_booked: 'จองแล้ว', st_received: 'รับรถแล้ว', st_inspection: 'ตรวจเช็ค', st_approval: 'รออนุมัติ', st_approval_c: 'รอคุณอนุมัติ', st_approved: 'อนุมัติแล้ว',
  st_parts_wait: 'รออะไหล่', st_in_progress: 'กำลังซ่อม', st_parts_replaced: 'เปลี่ยนอะไหล่แล้ว', st_qc: 'ตรวจคุณภาพ', st_ready: 'พร้อมรับรถ', st_completed: 'เสร็จสมบูรณ์', st_cancelled: 'ยกเลิก',
  col_checkin: 'รับรถ และตรวจเช็ค', col_parts: 'อนุมัติแล้ว และอะไหล่',
  new_updates: 'มีอัปเดตใหม่ {n} รายการตั้งแต่ครั้งก่อน', est_title: 'ใบประเมินราคา', est_extra: 'พบงานซ่อมเพิ่มเติม',
  est_intro: 'อนุมัติหรือไม่อนุมัติแต่ละรายการ ช่างจะซ่อมเฉพาะรายการที่คุณอนุมัติ', yes: 'อนุมัติ', no: 'ไม่อนุมัติ', approve_all: 'อนุมัติทั้งหมด', send_answer: 'ส่งคำตอบ',
  answer_all: 'กรุณาเลือกอนุมัติหรือไม่อนุมัติให้ครบทุกรายการ', answer_sent: 'ขอบคุณ ร้านได้รับคำตอบของคุณแล้ว',
  ls_proposed: 'รออนุมัติ', ls_approved: 'อนุมัติ', ls_declined: 'ไม่อนุมัติ', new_item: 'ใหม่',
  inspection_report: 'รายงานการตรวจเช็ค', r_green: 'ปกติ', r_yellow: 'ควรดูแลเร็วๆ นี้', r_red: 'ต้องซ่อมทันที', rb_green: 'ปกติ', rb_yellow: 'เร็วๆ นี้', rb_red: 'ด่วน',
  dvi_sum: 'ด่วน {r} · เร็วๆ นี้ {y} · ปกติ {g}', photos: 'รูปภาพ', before: 'ก่อน', after: 'หลัง', no_photos: 'ยังไม่มีรูป',
  chat: 'ข้อความ', chat_ph: 'พิมพ์ข้อความ', send: 'ส่ง', no_chat: 'ยังไม่มีข้อความ สอบถามร้านได้ที่นี่',
  invoice: 'ใบแจ้งหนี้', pay_now: 'ชำระผ่านพร้อมเพย์', scan_pay: 'สแกนด้วยแอปธนาคารใดก็ได้ ร้านจะยืนยันเมื่อได้รับเงิน',
  paid: 'ชำระแล้ว', due: 'ยอดค้างชำระ', discount: 'ส่วนลด', subtotal: 'รวม', vat: 'VAT 7%', total: 'ยอดรวม', fully_paid: 'ชำระครบแล้ว',
  history_veh: 'ประวัติการซ่อม', no_history: 'ยังไม่มีประวัติการซ่อม', updates: 'อัปเดตจากช่าง', no_updates: 'ยังไม่มีอัปเดต ข้อความและรูปจากช่างจะแสดงที่นี่',
  iam: 'ฉันคือ', pick_me: 'เลือกชื่อของคุณเพื่อดูงาน', my_jobs: 'งานของฉัน', unassigned_jobs: 'งานที่ยังไม่มีช่าง', take_job: 'รับงานนี้', no_my_jobs: 'ตอนนี้ยังไม่มีงานที่มอบหมายให้คุณ',
  act_start_insp: 'เริ่มตรวจเช็ค', act_insp_done: 'ตรวจเช็คเสร็จ', insp_done_wait: 'ตรวจเช็คเสร็จแล้ว หน้าร้านจะส่งใบประเมินราคาให้ลูกค้า',
  wait_customer: 'รอลูกค้าอนุมัติ', act_start_repair: 'เริ่มซ่อม', act_wait_parts: 'รออะไหล่', act_to_qc: 'ซ่อมเสร็จ ส่งตรวจคุณภาพ',
  act_parts_done: 'เปลี่ยนอะไหล่แล้ว ส่งตรวจคุณภาพ', act_qc_pass: 'ผ่านการตรวจ พร้อมรับรถ', act_checkin: 'รับรถเข้าร้าน', act_complete: 'ส่งมอบรถ ปิดงาน',
  unfitted_warn: 'มีอะไหล่ที่อนุมัติแล้ว {n} รายการยังไม่ได้บันทึกว่าเปลี่ยน ต้องการไปต่อหรือไม่', go_on: 'ไปต่อ', ready_wait: 'พร้อมแล้ว รอลูกค้ามารับรถ',
  timer: 'เวลาทำงานกับงานนี้', start: 'เริ่ม', stop: 'หยุด', logged: 'บันทึกแล้ว {h}', running: 'กำลังจับเวลา', tasks: 'รายการงาน', add_task: 'เพิ่ม', task_ph: 'เช่น เช็คลูกปืนล้อหลัง',
  tab_work: 'งาน', tab_overview: 'ภาพรวม', tab_inspect: 'ตรวจเช็ค', tab_parts: 'อะไหล่ ค่าแรง', tab_photos: 'รูป', tab_chat: 'ข้อความ', tab_pay: 'ชำระเงิน', tab_history: 'ประวัติ',
  dvi_tyre_f: 'ยางหน้า', dvi_tyre_r: 'ยางหลัง', dvi_brake_f: 'เบรกหน้า', dvi_brake_r: 'เบรกหลัง', dvi_drive: 'โซ่ สายพาน สเตอร์', dvi_oil: 'น้ำมันเครื่อง', dvi_battery: 'แบตเตอรี่',
  dvi_lights: 'ไฟ และไฟเลี้ยว', dvi_suspension: 'ช่วงล่าง โช้คอัพ', dvi_cables: 'สายคันเร่ง สายคลัตช์', dvi_leaks: 'รอยรั่วซึม', dvi_tyres: 'ยาง', dvi_brakes: 'ผ้าเบรก จานเบรก',
  dvi_coolant: 'น้ำหล่อเย็น', dvi_wipers: 'ใบปัดน้ำฝน', dvi_belts: 'สายพาน ท่อยาง', dvi_aircon: 'ระบบแอร์',
  dvi_note_ph: 'หมายเหตุ (ไม่บังคับ)', save_notes: 'บันทึกหมายเหตุ', dvi_start: 'กดเริ่มตรวจเช็คเพื่อกรอกรายการตรวจ',
  part: 'อะไหล่', labour: 'ค่าแรง', qty: 'จำนวน', hours: 'ชั่วโมง', price: 'ราคา ฿', desc: 'รายการ', add_line: 'เพิ่ม',
  add_from_stock: 'เพิ่มอะไหล่จากสต็อก', search_stock_ph: 'ชื่อ รหัส หรือสแกนบาร์โค้ด', in_stock: 'มี {n} ชิ้น', out_of_stock: 'หมดสต็อก',
  custom_part: 'อะไหล่นอกสต็อก', add_labour: 'เพิ่มค่าแรง', s_reserved: 'จองไว้แล้ว', s_needed: 'ต้องสั่ง', s_fitted: 'เปลี่ยนแล้ว',
  reserve: 'จองอะไหล่', fit: 'เปลี่ยนอะไหล่', need_part: 'แจ้งต้องสั่ง', unreserve: 'ยกเลิกจอง',
  fit_title: 'เปลี่ยน: {p}', fit_intro: 'ถ่ายรูปอะไหล่เก่าและจุดที่ซ่อมก่อนเปลี่ยน และรูปอะไหล่ใหม่หลังติดตั้ง',
  photo_before: 'ก่อน: อะไหล่เก่าและจุดที่ซ่อม', photo_after: 'หลัง: อะไหล่ใหม่ที่ติดตั้งแล้ว', need_both: 'ต้องมีรูปทั้งก่อนและหลัง', confirm_fit: 'ยืนยันเปลี่ยนแล้ว',
  not_enough: 'สต็อกไม่พอ บันทึกว่าต้องสั่ง', extra_note: 'รายการใหม่จะส่งให้ลูกค้าอนุมัติ',
  send_est: 'ส่งใบประเมินราคาให้ลูกค้า', send_extra: 'ส่งรายการใหม่ให้ลูกค้าอนุมัติ', est_sent: 'ส่งแล้ว รอลูกค้าตอบ',
  convert: 'ลูกค้าตกลงทางโทรศัพท์: เปลี่ยนเป็นใบสั่งซ่อม', doc_estimate: 'ใบประเมินราคา', doc_ro: 'ใบสั่งซ่อม',
  big_job_pending: 'ยอดเกิน {a} รอเจ้าของอนุมัติก่อนส่งให้ลูกค้า', disc_pct: 'ส่วนลด %', apply: 'ใช้',
  disc_pending: 'ส่วนลด {p}% รอเจ้าของอนุมัติ', disc_applied: 'ใช้ส่วนลด {p}% แล้ว', disc_rejected: 'เจ้าของไม่อนุมัติส่วนลด {p}%',
  est_total: 'ยอดประเมิน', no_lines: 'ยังไม่มีรายการอะไหล่หรือค่าแรง', price_later: 'หน้าร้านจะกำหนดราคา',
  take_payment: 'รับชำระเงิน', pm_cash: 'เงินสด', pm_card: 'บัตร', pm_transfer: 'โอนเงิน', pm_promptpay: 'พร้อมเพย์ QR', amount: 'จำนวนเงิน ฿', record: 'บันทึกการชำระ',
  no_pp: 'ใส่เบอร์พร้อมเพย์ในหน้าตั้งค่าเพื่อแสดง QR', qr_offline: 'โหลด QR ไม่ได้ พร้อมเพย์ {id} จำนวน {a}', payments: 'การชำระเงิน',
  copy_invoice: 'คัดลอกใบแจ้งหนี้', copy_msg: 'คัดลอกข้อความถึงลูกค้า', thanks: 'ขอบคุณที่ใช้บริการ',
  appointments: 'นัดหมาย', no_appts: 'ไม่มีนัดหมายวันนี้', attention: 'ต้องดำเนินการ', nothing: 'ไม่มีงานค้าง',
  att_answered: 'ลูกค้าตอบใบประเมินแล้ว', att_chat: 'มีข้อความใหม่จากลูกค้า', att_dvi: 'ตรวจเช็คเสร็จ: ส่งใบประเมิน', att_parts: 'ต้องสั่งอะไหล่',
  att_extra: 'มีรายการใหม่รอส่งให้ลูกค้า', ready_pickup: 'พร้อมรับรถ', due_amt: 'ค้างชำระ {a}', in_shop_now: 'รถในร้าน {n} คัน',
  board: 'บอร์ด', list: 'รายการ', search_ph: 'ชื่อ เบอร์โทร ทะเบียน เลขตัวถัง หรือเลขงาน', all_jobs: 'งานทั้งหมด',
  newjob_title: 'เปิดงานใหม่', here_now: 'รถอยู่ที่ร้านแล้ว', book_later: 'นัดวันหลัง', date: 'วันที่', mechanic: 'ช่าง', unassigned: 'ยังไม่มอบหมาย', customer: 'ลูกค้า', problem: 'อาการ',
  create_job: 'เปิดงาน', stock_title: 'สต็อกอะไหล่', f_all: 'ทั้งหมด', f_low: 'ใกล้หมด', f_needed: 'ต้องสั่งให้งาน',
  on_hand: 'คงเหลือ', reserved: 'จองไว้', available: 'พร้อมใช้', reorder_at: 'สั่งเมื่อเหลือ', reorder_qty: 'จำนวนสั่ง', cost: 'ทุน ฿', sell: 'ราคาขาย ฿', margin: 'กำไร',
  sku: 'รหัสสินค้า', barcode: 'บาร์โค้ด', category: 'หมวด', fits: 'ใช้กับ', fits_both: 'ทั้งสองแบบ', shelf: 'ชั้นวาง', supplier: 'ร้านค้าส่ง', part_name: 'ชื่ออะไหล่', add_part: 'เพิ่มอะไหล่', new_part: 'อะไหล่ใหม่',
  reorder_title: 'แนะนำสั่งซื้อ', suggest: 'สั่ง {q}', copy_order: 'คัดลอกรายการสั่งซื้อ', receive: 'รับสินค้าเข้า', count: 'ตรวจนับสต็อก', counted: 'จำนวนที่นับได้', unit_cost: 'ทุนต่อชิ้น ฿',
  stock_hist: 'ประวัติสต็อก', mv_receive: 'รับเข้า', mv_use: 'ใช้กับงาน {r}', mv_adjust: 'ปรับยอดจากการนับ', reserved_for: 'จองไว้ให้งาน', low: 'ใกล้หมด', no_parts: 'ไม่พบอะไหล่',
  scan_hint: 'ใช้เครื่องสแกนบาร์โค้ดแบบ USB หรือบลูทูธได้ สแกนแล้วจะเปิดอะไหล่ทันที', save: 'บันทึก', saved: 'บันทึกแล้ว', back: 'กลับ', cancel: 'ยกเลิก', del: 'ลบ', close: 'ปิด',
  cat_oil: 'น้ำมัน', cat_brakes: 'เบรก', cat_tyres: 'ยาง', cat_electrical: 'ไฟฟ้า', cat_engine: 'เครื่องยนต์', cat_drive: 'ระบบขับ', cat_filters: 'ไส้กรอง', cat_body: 'ตัวถัง', cat_other: 'อื่นๆ',
  k_inshop: 'รถในร้าน', k_revenue: 'รายได้วันนี้', k_pending: 'รออนุมัติ', k_low: 'อะไหล่ใกล้หมด', k_eff: 'ประสิทธิภาพช่าง สัปดาห์นี้',
  your_approvals: 'รอคุณอนุมัติ', appr_disc: '{r}: ส่วนลด {p}% (−{a})', appr_big: '{r}: ใบประเมิน {a}', approve: 'อนุมัติ', reject: 'ไม่อนุมัติ',
  working: 'ใครทำงานอะไรอยู่', idle: 'ไม่ได้จับเวลา', jobs_n: 'งานค้าง {n} งาน',
  p_today: 'วันนี้', p_week: 'สัปดาห์นี้', p_month: 'เดือนนี้', pl: 'กำไรขาดทุน', revenue: 'รายได้ (รับชำระ)', vat_col: 'VAT ในยอดรับชำระ', parts_cost: 'ต้นทุนอะไหล่',
  gross: 'กำไรขั้นต้น', expenses: 'ค่าใช้จ่าย', net: 'กำไรสุทธิ', by_method: 'แยกตามวิธีชำระ', jobs_done: 'งานที่ปิดแล้ว', aro: 'ยอดเฉลี่ยต่องาน',
  tech_prod: 'ผลงานช่าง', h_clocked: 'เวลาทำงาน', h_billed: 'ชั่วโมงที่คิดเงิน', eff: 'ประสิทธิภาพ', parts_profit: 'กำไรจากอะไหล่', sold: 'ขาย', profit: 'กำไร',
  invoices: 'ใบแจ้งหนี้', add_expense: 'เพิ่มค่าใช้จ่าย', note: 'หมายเหตุ', no_data: 'ยังไม่มีข้อมูลในช่วงนี้',
  ex_rent: 'ค่าเช่า', ex_wages: 'ค่าแรงพนักงาน', ex_utilities: 'ค่าน้ำค่าไฟ', ex_tools: 'เครื่องมือ', ex_supplies: 'วัสดุสิ้นเปลือง', ex_other: 'อื่นๆ',
  settings_title: 'ตั้งค่าร้าน', settings_note: 'ลูกค้าจะเห็นชื่อร้าน เบอร์โทร และ LINE ในแอป', shop_name: 'ชื่อร้าน', shop_phone: 'เบอร์ร้าน', shop_line: 'LINE ID ร้าน', address: 'ที่อยู่หรือย่าน',
  mechanics: 'รายชื่อช่าง (คั่นด้วยเครื่องหมายจุลภาค)', labour_rate: 'ค่าแรง ฿ ต่อชั่วโมง', per_slot: 'รับรถได้ต่อช่วงเวลา (คัน)', opening: 'เวลาเปิด-ปิด', opens: 'เปิด', closes: 'ปิด',
  closed_day: 'วันหยุด', none: 'เปิดทุกวัน', vat_on: 'คิด VAT 7% ในใบประเมินและใบแจ้งหนี้', promptpay: 'พร้อมเพย์ (เบอร์โทรหรือเลขผู้เสียภาษี)',
  big_job: 'เจ้าของต้องอนุมัติใบประเมินที่เกิน ฿', disc_limit: 'เจ้าของต้องอนุมัติส่วนลดที่เกิน %', branches: 'สาขา (คั่นด้วยเครื่องหมายจุลภาค)',
  prices: 'ราคาเริ่มต้น มอเตอร์ไซค์ / รถยนต์ (0 = ประเมินหลังตรวจ)', clear_examples: 'ลบข้อมูลตัวอย่าง', confirm_examples: 'ลบงาน สต็อก การชำระเงิน และค่าใช้จ่ายตัวอย่างทั้งหมด?',
  demo_roles: 'ในเวอร์ชันนี้ทุกคนสลับบทบาทได้ ระบบล็อกอินแยกแต่ละคนจะมาในเวอร์ชันใช้งานจริง',
  read_only: 'คุณดูได้อย่างเดียว แก้ไขไม่ได้', err_quota: 'พื้นที่เก็บข้อมูลเต็ม กรุณาลบข้อมูลเก่าแล้วลองใหม่', err_save: 'บันทึกไม่สำเร็จ ตรวจสอบอินเทอร์เน็ตแล้วลองอีกครั้ง',
  err_photo: 'อ่านรูปนี้ไม่ได้ ลองรูปอื่น', copy_fail: 'คัดลอกข้อความนี้:', today: 'วันนี้', tomorrow: 'พรุ่งนี้', walkin: 'เข้าร้านเอง', confirm_delete: 'ลบงาน {r}? ไม่สามารถกู้คืนได้', delete_job: 'ลบงานนี้',
  sv_oil: 'เปลี่ยนน้ำมันเครื่อง', sv_service: 'เช็คระยะ', sv_tyres: 'ยาง', sv_brakes: 'ระบบเบรก', sv_chain: 'โซ่ สเตอร์', sv_aircon: 'ระบบแอร์', sv_electrical: 'ระบบไฟ แบตเตอรี่',
  sv_engine: 'ซ่อมเครื่องยนต์', sv_body: 'ซ่อมตัวถัง อุบัติเหตุ', sv_other: 'อื่นๆ',
  ev_est_sent: 'ส่งใบประเมิน: {a}', ev_est_answer: 'ลูกค้าอนุมัติ {y} จาก {n} รายการ', ev_converted: 'เปลี่ยนเป็นใบสั่งซ่อม (ลูกค้าตกลงทางโทรศัพท์)', ev_fitted: 'เปลี่ยนแล้ว: {p}',
  ev_dvi_done: 'ตรวจเช็คเสร็จ', ev_paid: 'รับชำระ {a} ({m})', ev_needed: 'ต้องสั่งอะไหล่: {p}', ev_big_ok: 'เจ้าของอนุมัติใบประเมิน', ev_disc: 'ส่วนลด {p}%: {s}',
  by_customer: 'ลูกค้า', msg_hi: 'สวัสดีคุณ{n}', msg_body: 'รถ {b} ของคุณ สถานะตอนนี้: {s}', msg_code: 'เลขงาน {r} ติดตามในแอปด้วยรหัสนี้', msg_total: 'ยอดรวม {t}',
  update_ph: 'เช่น ผ้าเบรกหลังหมด กำลังเปลี่ยนให้', logo: 'โลโก้ร้าน', logo_hint: 'ไฟล์ PNG พื้นหลังโปร่งใสจะดูดีที่สุด', front_desk: 'หน้าร้าน', time_h: '{h} ชม.', est_waiting_owner: 'รอเจ้าของ', who: 'ใคร', none_short: '—'
}
};
let lang = 'en';
function t(k, v) {
  let s = (T[lang] && T[lang][k] != null) ? T[lang][k] : (T.en[k] != null ? T.en[k] : k);
  if (v) Object.keys(v).forEach(a => { s = s.split('{' + a + '}').join(v[a]); });
  return s;
}
const ic = (n, cls) => '<svg class="ic' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>';
const NAV_IC = { shop: 'store', book: 'calendar', track: 'pin', myjobs: 'wrench', stock: 'box', today: 'today', board: 'board', newjob: 'plus', dash: 'gauge', reports: 'chart', settings: 'sliders', signin: 'lock' };
const SVC_IC = { oil: 'oil', service: 'service', tyres: 'tyre', brakes: 'brake', chain: 'chain', aircon: 'snow', electrical: 'battery', engine: 'engine', body: 'body', other: 'dots' };
const ST_IC = { booked: 'calendar', received: 'key', inspection: 'inspect', approval: 'hourglass', approved: 'checkc', parts_wait: 'truck', in_progress: 'wrench', parts_replaced: 'swap', qc: 'shield', ready: 'flag', completed: 'done', cancelled: 'x' };
const ROLE_IC = { customer: 'user', mechanic: 'wrench', desk: 'store', owner: 'crown' };
const TAB_IC = { work: 'wrench', overview: 'receipt', inspect: 'inspect', parts: 'box', photos: 'camera', chat: 'chat', pay: 'cash', history: 'history' };
const LOGO_SRC = window.APP_LOGO || "";
function logoSrc(full) {
  const own = D && D.settings && D.settings.logo; if (own) return own;
  if (!full && window.APP_MARK) return window.APP_MARK;
  return LOGO_SRC.indexOf('/*') === 0 ? '' : LOGO_SRC;
}
function logoHtml(cls) { const s = logoSrc(/big|full/.test(cls || '')); return s ? '<img class="' + (cls || 'logo') + '" alt="" src="' + esc(s) + '">' : '<svg class="logo-mark" aria-hidden="true"><use href="#i-mark"/></svg>'; }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

/* ================= constants ================= */
const STAGES = ['booked', 'received', 'inspection', 'approval', 'approved', 'parts_wait', 'in_progress', 'parts_replaced', 'qc', 'ready', 'completed'];
const IN_SHOP = ['received', 'inspection', 'approval', 'approved', 'parts_wait', 'in_progress', 'parts_replaced', 'qc', 'ready'];
const ACTIVE = ['booked'].concat(IN_SHOP);
const COLUMNS = [
  { k: 'st_booked', s: ['booked'], c: 'booked' }, { k: 'col_checkin', s: ['received', 'inspection'], c: 'inspection' }, { k: 'st_approval', s: ['approval'], c: 'approval' },
  { k: 'col_parts', s: ['approved', 'parts_wait'], c: 'parts_wait' }, { k: 'st_in_progress', s: ['in_progress', 'parts_replaced'], c: 'in_progress' },
  { k: 'st_qc', s: ['qc'], c: 'qc' }, { k: 'st_ready', s: ['ready'], c: 'ready' }
];
const SERVICES = [
  { key: 'oil', for: 'both' }, { key: 'service', for: 'both' }, { key: 'tyres', for: 'both' }, { key: 'brakes', for: 'both' }, { key: 'chain', for: 'bike' },
  { key: 'aircon', for: 'car' }, { key: 'electrical', for: 'both' }, { key: 'engine', for: 'both' }, { key: 'body', for: 'both' }, { key: 'other', for: 'both' }
];
const BRANDS = { bike: ['Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'GPX', 'Vespa', 'other'], car: ['Toyota', 'Honda', 'Isuzu', 'Mitsubishi', 'Nissan', 'Mazda', 'Ford', 'MG', 'other'] };
const DVI = {
  bike: ['tyre_f', 'tyre_r', 'brake_f', 'brake_r', 'drive', 'oil', 'battery', 'lights', 'suspension', 'cables', 'leaks'],
  car: ['tyres', 'brakes', 'oil', 'coolant', 'battery', 'lights', 'wipers', 'suspension', 'belts', 'aircon', 'leaks']
};
const PAY = ['cash', 'card', 'transfer', 'promptpay'];
const EXP_CATS = ['rent', 'wages', 'utilities', 'tools', 'supplies', 'other'];
const PART_CATS = ['oil', 'brakes', 'tyres', 'electrical', 'engine', 'drive', 'filters', 'body', 'other'];
const PROVINCES = ['กรุงเทพมหานคร', 'นนทบุรี', 'ปทุมธานี', 'สมุทรปราการ', 'นครปฐม', 'สมุทรสาคร'];
const DEFAULTS = {
  name: 'Moto x Auto', phone: '', line: '', address: '', mechanics: 'Ton, Bas', labourRate: 200, perSlot: 2, open: 9, close: 18, closedDay: -1,
  vat: false, promptpay: '', bigJob: 5000, discountLimit: 10, branches: 'Main',
  prices: { oil: [250, 900], service: [600, 2500], tyres: [150, 300], brakes: [200, 800], chain: [400, 0], aircon: [0, 800], electrical: [300, 500], engine: [0, 0], body: [0, 0], other: [0, 0] }
};
const ROLES = ['customer', 'mechanic', 'desk', 'owner'];
const NAV = { customer: ['book', 'track', 'shop'], mechanic: ['myjobs', 'stock'], desk: ['today', 'board', 'newjob', 'stock'], owner: ['dash', 'board', 'stock', 'reports', 'settings'] };
const HOME = { customer: 'book', mechanic: 'myjobs', desk: 'today', owner: 'dash' };
const STAFF = ['work', 'dvi', 'tasks', 'timer', 'photos', 'notes', 'parts_use'];
const DESK = STAFF.concat(['checkin', 'estimate', 'price', 'chat', 'pay', 'discount', 'stock_edit', 'status_any', 'newjob', 'assign']);
const CAN = { customer: [], mechanic: STAFF, desk: DESK, owner: DESK.concat(['cost', 'reports', 'settings', 'approve', 'expenses', 'delete']) };

/* ================= state ================= */
const D = { jobs: new Map(), parts: new Map(), moves: new Map(), expenses: new Map(), photos: new Map(), settings: clone(DEFAULTS), sync: 'connecting', db: null, readonly: false };
const S = {
  role: 'customer', view: 'book', id: null, tab: '', me: '', branch: '',
  form: blankForm(), walk: blankWalk(), bookedId: null, err: '', trackQ: '', trackDone: '', trackPick: null, est: {},
  boardMode: 'board', q: '', stockQ: '', stockF: 'all', period: 'today', apptDay: '', line: blankLine(), lineQ: '', note: '', notePhoto: null,
  chatText: '', taskText: '', dviNotes: {}, setDraft: null, partDraft: null, recv: { qty: '', cost: '' }, cnt: '', fit: null, pay: { method: 'cash', amount: '' },
  discPct: '', exp: { cat: 'rent', amount: '', note: '' }, lastCust: '', lastStaff: {}
};
function blankForm() { return { vtype: 'bike', service: '', brand: '', model: '', year: '', vin: '', mileage: '', series: '', number: '', province: 'กรุงเทพมหานคร', problem: '', photo: null, date: '', time: '', name: '', phone: '', line: '' }; }
function blankWalk() { const f = blankForm(); f.mechanic = ''; f.now = true; return f; }
function blankLine() { return { kind: 'labour', desc: '', qty: '1', price: '' }; }
function clone(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }
function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }

/* ================= dates, money, ids ================= */
const pad = n => String(n).padStart(2, '0');
const ymd = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
function parseYmd(s) { const p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
const today = () => ymd(new Date());
function addDays(s, n) { const d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); }
const loc = () => lang === 'th' ? 'th-TH' : 'en-GB';
function fmtDay(s) {
  if (!s) return '';
  if (s === today()) return t('today');
  if (s === addDays(today(), 1)) return t('tomorrow');
  return new Intl.DateTimeFormat(loc(), { weekday: 'short', day: 'numeric', month: 'short' }).format(parseYmd(s));
}
const fmtLong = s => new Intl.DateTimeFormat(loc(), { day: 'numeric', month: 'long', year: 'numeric' }).format(parseYmd(s));
const fmtClock = iso => new Intl.DateTimeFormat(loc(), { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date(iso));
const fmtWhen = iso => iso ? fmtDay(ymd(new Date(iso))) + ' ' + fmtClock(iso) : '';
const dayOf = iso => ymd(new Date(iso));
const r2 = n => Math.round((Number(n) || 0) * 100) / 100;
function baht(n) { n = r2(n); const frac = Math.round(Math.abs(n) * 100) % 100 !== 0; return (n < 0 ? '−' : '') + '฿' + Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: frac ? 2 : 0, maximumFractionDigits: 2 }); }
function hrs(ms) { const h = ms / 3600000; return (Math.round(h * 10) / 10).toLocaleString('en-US'); }
function clock(ms) { const m = Math.max(0, Math.floor(ms / 60000)); return Math.floor(m / 60) + ':' + pad(m % 60); }
const nowIso = () => new Date().toISOString();
const newId = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const digits = s => String(s || '').replace(/\D/g, '');
const num = v => { const n = parseFloat(String(v == null ? '' : v).replace(/[,฿\s]/g, '')); return isFinite(n) ? n : NaN; };
function newRef() { const used = new Set(); D.jobs.forEach(j => used.add(j.ref)); let r; do { r = 'MB-' + (1000 + Math.floor(Math.random() * 9000)); } while (used.has(r)); return r; }
const sum = (a, f) => a.reduce((x, y) => x + (Number(f(y)) || 0), 0);

/* ================= domain helpers ================= */
const can = p => (CAN[S.role] || []).indexOf(p) >= 0;
function mechanics() {
  const m = String(D.settings.mechanics || '').split(',').map(s => s.trim()).filter(Boolean);
  if (typeof LIVE !== 'undefined' && LIVE) D.profiles.forEach(p => { if (p.role === 'mechanic' && p.name && m.indexOf(p.name) < 0) m.push(p.name); });
  return m;
}
const branches = () => { const b = String(D.settings.branches || '').split(',').map(s => s.trim()).filter(Boolean); return b.length ? b : ['Main']; };
const curBranch = () => { const b = branches(); return b.indexOf(S.branch) >= 0 ? S.branch : b[0]; };
const inBranch = o => (o.loc || branches()[0]) === curBranch() || (branches().indexOf(o.loc) < 0 && curBranch() === branches()[0]);
const jobsHere = () => Array.from(D.jobs.values()).filter(inBranch);
const partsHere = () => Array.from(D.parts.values()).filter(inBranch);
const svcName = k => t('sv_' + k);
const stLabel = (s, cust) => cust && s === 'approval' ? t('st_approval_c') : t('st_' + s);
function vName(v) { if (!v) return ''; const b = v.brand === 'other' ? '' : (v.brand || ''); return (b + ' ' + (v.model || '')).trim() || t('other'); }
const plateText = v => v && (v.series || v.number) ? [v.series, v.number, v.province].filter(Boolean).join(' ') : '';
const plateKey = v => v ? (String(v.series || '') + String(v.number || '')).replace(/\s/g, '') : '';
const avail = p => (Number(p.onHand) || 0) - (Number(p.reserved) || 0);
const isLow = p => avail(p) <= (Number(p.reorderLevel) || 0);
const lineAmt = l => r2((Number(l.qty) || 0) * (Number(l.price) || 0));
function priceFor(key, vtype) { const p = (D.settings.prices || {})[key] || [0, 0]; return Number(p[vtype === 'car' ? 1 : 0]) || 0; }
function discOn(j) { return j.discount && (j.discount.status === 'applied' || j.discount.status === 'approved') ? Number(j.discount.pct) || 0 : 0; }
function calc(j, lines) {
  const sub = r2(sum(lines, lineAmt)), disc = r2(sub * discOn(j) / 100), net = sub - disc, vat = D.settings.vat ? r2(net * 0.07) : 0, total = r2(net + vat);
  const paid = r2(sum(j.payments || [], p => p.amount));
  return { sub, disc, vat, total, paid, due: r2(total - paid) };
}
const totals = j => calc(j, j.lines.filter(l => l.state === 'approved'));
const estTotals = j => calc(j, j.lines.filter(l => l.state !== 'declined'));
const proposed = j => j.lines.filter(l => l.state === 'proposed');
const unfitted = j => j.lines.filter(l => l.kind === 'part' && l.state === 'approved' && l.stock !== 'fitted');
const dviCount = j => { const c = { red: 0, yellow: 0, green: 0 }; (j.dvi || []).forEach(d => { if (c[d.rating] != null) c[d.rating]++; }); return c; };
function loggedMs(j, mech, from, to) {
  let ms = 0;
  (j.timeLogs || []).forEach(l => {
    if (mech && l.mech !== mech) return;
    let a = new Date(l.start).getTime(), b = new Date(l.end).getTime();
    if (from) a = Math.max(a, from); if (to) b = Math.min(b, to);
    if (b > a) ms += b - a;
  });
  return ms;
}

const OLD = { checked_in: 'received', inspecting: 'inspection', quote: 'approval', repairing: 'in_progress', collected: 'completed' };
function norm(src) {
  const j = Object.assign({}, src);
  if (OLD[j.status]) j.status = OLD[j.status];
  if (!j.vehicle && j.bike) j.vehicle = Object.assign({ type: 'bike' }, j.bike);
  j.vehicle = Object.assign({ type: 'bike', brand: '', model: '', series: '', number: '', province: '', vin: '', year: '', mileage: '' }, j.vehicle || {});
  if (!j.lines && j.items) {
    const waiting = j.quote && j.quote.status === 'waiting';
    j.lines = j.items.map(i => ({ id: i.id, kind: i.type === 'labour' ? 'labour' : 'part', partId: null, desc: i.desc, qty: i.qty, price: i.price, cost: 0, state: waiting ? 'proposed' : 'approved', stock: 'none', extra: false }));
  }
  ['lines', 'timeline', 'tasks', 'dvi', 'timeLogs', 'photos', 'chat', 'payments'].forEach(k => { if (!Array.isArray(j[k])) j[k] = []; });
  j.timers = j.timers || {};
  if (!j.estimate) j.estimate = j.quote && j.quote.status === 'waiting' ? { status: 'sent', sentAt: j.quote.sentAt } : { status: 'none' };
  j.discount = j.discount || { pct: 0, status: 'none' };
  j.customer = Object.assign({ name: '', phone: '', line: '' }, j.customer || {});
  j.timeline = j.timeline.map(e => e.kind === 'status' && OLD[e.status] ? Object.assign({}, e, { status: OLD[e.status] }) : e);
  if (j.photo && !j.photos.some(p => p.id === j.photo)) j.photos = j.photos.concat([{ id: j.photo, stage: 'booked', kind: 'customer', at: j.createdAt, by: 'customer' }]);
  j.ownerOk = j.ownerOk || 'none';
  return j;
}

/* ================= data layer ================= */
const COLS = ['jobs', 'parts', 'moves', 'expenses'];
const LS_KEY = 'motoapp.local.v2';
const chains = {};
function queue(path, fn) { const p = (chains[path] || Promise.resolve()).catch(() => {}).then(fn); chains[path] = p; return p; }
const sleep = ms => new Promise(r => setTimeout(r, ms));
function dbSet(path, data) {
  return queue(path, () => D.db.doc(path).set(data).catch(e => {
    if (e && e.code === 'unavailable') return sleep(400 + Math.random() * 600).then(() => D.db.doc(path).set(data));
    throw e;
  }));
}
const dbDel = path => queue(path, () => D.db.doc(path).delete());
function writeFailed(e) {
  const code = e && e.code;
  if (code === 'invalid_argument' || code === 'not_granted') { D.readonly = true; toast(t('read_only')); }
  else if (code === 'quota_exceeded') toast(t('err_quota'));
  else toast(t('err_save'));
  scheduleRender();
}
function persistLocal() {
  const o = { settings: D.settings, photos: Array.from(D.photos.entries()) };
  COLS.forEach(c => { o[c] = Array.from(D[c].values()); });
  lsSet(LS_KEY, JSON.stringify(o));
}
function put(col, obj) {
  obj.updatedAt = nowIso();
  D[col].set(obj.id, obj);
  if (LIVE) { saveCacheSoon(); return dbWrite({ op: 'upsert', table: col, id: obj.id, data: obj }); }
  if (D.db) return dbSet(col + '/' + obj.id, obj).catch(writeFailed);
  persistLocal(); return Promise.resolve();
}
function drop(col, id) {
  D[col].delete(id);
  if (LIVE) return dbWrite({ op: 'delete', table: col, id: id });
  if (D.db) return dbDel(col + '/' + id).catch(writeFailed);
  persistLocal(); return Promise.resolve();
}
function putPhoto(id, jobId, data) {
  D.photos.set(id, data);
  if (LIVE) return dbWrite({ op: 'photo', table: 'photos', id: id, data: data });
  if (D.db) return dbSet('photos/' + id, { jobId: jobId, data: data, at: nowIso() }).catch(writeFailed);
  persistLocal(); return Promise.resolve();
}
function saveSettings(s) { D.settings = s; if (LIVE) return dbWrite({ op: 'settings', table: 'settings', id: 'shop', data: s }); if (D.db) return dbSet('config/shop', s).catch(writeFailed); persistLocal(); return Promise.resolve(); }
const photoLoading = {};
function hydratePhotos() {
  document.querySelectorAll('img[data-photo]').forEach(img => {
    const id = img.getAttribute('data-photo'), src = D.photos.get(id) || (LIVE && id ? photoUrl(id) : '');
    if (src) { if (img.getAttribute('src') !== src) img.setAttribute('src', src); }
    else if (D.db && !photoLoading[id]) {
      photoLoading[id] = 1;
      D.db.doc('photos/' + id).get().then(s => { if (s.exists) { D.photos.set(id, s.data().data); hydratePhotos(); } }).catch(() => { photoLoading[id] = 0; });
    }
  });
}
function loadExamples() {
  const ex = typeof makeExamples === 'function' ? makeExamples(today()) : { jobs: [], parts: [], moves: [], expenses: [], photos: {} };
  COLS.forEach(c => { D[c] = new Map((ex[c] || []).map(o => [o.id, c === 'jobs' ? norm(o) : o])); });
  D.photos = new Map(Object.entries(ex.photos || {}));
}
function startLocal() {
  D.db = null; D.sync = 'local';
  const raw = lsGet(LS_KEY); let ok = false;
  if (raw) {
    try {
      const o = JSON.parse(raw);
      COLS.forEach(c => { D[c] = new Map((o[c] || []).map(x => [x.id, c === 'jobs' ? norm(x) : x])); });
      D.settings = Object.assign(clone(DEFAULTS), o.settings || {});
      D.photos = new Map(o.photos || []);
      ok = true;
    } catch (e) { ok = false; }
  }
  if (!ok) loadExamples();
  scheduleRender();
}
function connect() {
  if (LIVE) { connectLive(); return; }
  const c = window.claude;
  if (!c || typeof c.use !== 'function') { startLocal(); return; }
  const timer = setTimeout(() => { if (D.sync === 'connecting') { D.sync = 'stale'; scheduleRender(); } }, 10000);
  c.use('db').then(db => {
    if (!db) { clearTimeout(timer); startLocal(); return; }
    D.db = db;
    c.use('user').then(u => {
      if (u && typeof u.can === 'function') Promise.resolve(u.can('data.write')).then(ok => { if (ok === false) { D.readonly = true; scheduleRender(); } }).catch(() => {});
    }).catch(() => {});
    const loaded = {};
    COLS.forEach(col => {
      db.collection(col).onSnapshot(snap => {
        const m = new Map();
        snap.docs.forEach(d => { const o = Object.assign({}, d.data()); o.id = d.id; m.set(d.id, col === 'jobs' ? norm(o) : o); });
        D[col] = m;
        if (!snap.metadata.fromCache) loaded[col] = 1;
        if (COLS.every(k => loaded[k])) { clearTimeout(timer); D.sync = 'live'; }
        scheduleRender();
      }, () => { clearTimeout(timer); D.sync = 'error'; scheduleRender(); });
    });
    db.doc('config/shop').onSnapshot(snap => {
      D.settings = Object.assign(clone(DEFAULTS), snap.exists ? clone(snap.data()) : {});
      D.settings.prices = Object.assign(clone(DEFAULTS.prices), D.settings.prices || {});
      scheduleRender();
    }, () => {});
  }).catch(() => { clearTimeout(timer); startLocal(); });
}

/* ================= stock operations ================= */
function stockMove(part, qty, type, job, extra) {
  const m = Object.assign({ id: newId('m'), partId: part.id, partName: part.name, qty: qty, type: type, at: nowIso(), jobId: job ? job.id : null, jobRef: job ? job.ref : '',
    plate: job ? [job.vehicle.series, job.vehicle.number].filter(Boolean).join(' ') : '', cost: Number(part.cost) || 0, price: Number(part.price) || 0, by: whoAmI(), loc: part.loc || curBranch() }, extra || {});
  return put('moves', m);
}
function adjustStock(id, dOn, dRes) {
  const p = D.parts.get(id); if (!p) return null;
  const c = clone(p); c.onHand = (Number(c.onHand) || 0) + (dOn || 0); c.reserved = Math.max(0, (Number(c.reserved) || 0) + (dRes || 0));
  if (LIVE) { D.parts.set(id, c); dbWrite({ op: 'stock', table: 'parts', id: id, dOn: dOn || 0, dRes: dRes || 0 }); return c; }
  put('parts', c); return c;
}
function whoAmI() { if (LIVE && AUTH.profile && isStaff() && S.role !== 'customer') return AUTH.profile.name || AUTH.profile.email; return S.role === 'mechanic' ? (S.me || t('role_mechanic')) : S.role === 'owner' ? t('role_owner') : S.role === 'desk' ? t('front_desk') : t('role_customer'); }

/* ================= PromptPay ================= */
function crc16(s) { let c = 0xFFFF; for (let i = 0; i < s.length; i++) { c ^= s.charCodeAt(i) << 8; for (let b = 0; b < 8; b++) { c = (c & 0x8000) ? ((c << 1) ^ 0x1021) : (c << 1); c &= 0xFFFF; } } return c.toString(16).toUpperCase().padStart(4, '0'); }
const tlv = (id, v) => id + String(v.length).padStart(2, '0') + v;
function promptpayPayload(target, amount) {
  let id = digits(target), tag;
  if (id.length === 15) tag = tlv('03', id);
  else if (id.length === 13) tag = tlv('02', id);
  else { if (id[0] === '0') id = '66' + id.slice(1); tag = tlv('01', ('0000000000000' + id).slice(-13)); }
  const p = tlv('00', '01') + tlv('01', amount ? '12' : '11') + tlv('29', tlv('00', 'A000000677010111') + tag) + tlv('58', 'TH') + tlv('53', '764') + (amount ? tlv('54', Number(amount).toFixed(2)) : '') + '6304';
  return p + crc16(p);
}
function qrHtml(amount) {
  const id = D.settings.promptpay;
  if (!id || digits(id).length < 9) return '<p class="note">' + esc(t('no_pp')) + '</p>';
  if (typeof window.qrcode !== 'function') return '<p class="note">' + esc(t('qr_offline', { id: id, a: baht(amount) })) + '</p>';
  try {
    const qr = window.qrcode(0, 'M'); qr.addData(promptpayPayload(id, amount)); qr.make();
    return '<div class="qr"><span class="pp">PromptPay</span><img alt="PromptPay QR ' + esc(baht(amount)) + '" src="' + qr.createDataURL(6, 2) + '"><b>' + esc(baht(amount)) + '</b><span class="note" style="color:#555">' + esc(D.settings.name) + '</span></div>';
  } catch (e) { return '<p class="note">' + esc(t('qr_offline', { id: id, a: baht(amount) })) + '</p>'; }
}

/* ================= live mode (Supabase) ================= */
const CFG = window.APP_CONFIG || {};
const LIVE = !!(CFG.url && CFG.key);
let sb = null, liveChan = null, sessionUid = undefined;
const AUTH = { user: null, profile: null, ready: !LIVE };
D.profiles = new Map();
S.slotCounts = {}; S.trackJobs = []; S.trackCode = ''; S.trackPhone = ''; S.booked = null; S.authMode = 'in'; S.auth = { email: '', password: '', name: '' }; S.authErr = '';

const isStaff = () => !!(AUTH.profile && ['mechanic', 'desk', 'owner'].indexOf(AUTH.profile.role) >= 0);
/* which app this is: 'customer', 'worker', 'owner', or 'all' (the prototype, with an app picker) */
const KIND = ['customer', 'worker', 'owner'].indexOf(window.APP_KIND) >= 0 ? window.APP_KIND : 'all';
S.appKind = KIND !== 'all' ? KIND : (['customer', 'worker', 'owner'].indexOf(lsGet('motoapp.kind')) >= 0 ? lsGet('motoapp.kind') : 'customer');
const kindRoles = k => ({ customer: ['customer'], worker: ['mechanic', 'desk'], owner: ['owner'] })[k] || ROLES;
function allowedRoles() {
  if (!LIVE) return kindRoles(S.appKind);
  if (S.appKind === 'customer') return ['customer'];
  if (!isStaff()) return [];
  const r = AUTH.profile.role;
  if (S.appKind === 'worker') return r === 'mechanic' ? ['mechanic'] : r === 'desk' ? ['desk'] : ['desk', 'mechanic'];
  if (S.appKind === 'owner') return r === 'owner' ? ['owner'] : [];
  return { owner: ROLES, desk: ['customer', 'desk'], mechanic: ['mechanic'] }[r];
}
const defaultRole = () => allowedRoles()[0] || kindRoles(S.appKind)[0];
const custLive = () => LIVE && S.role === 'customer';

const photoPath = id => (String(id)[0] === 'b' ? 'b/' : 'p/') + id + '.jpg';
const photoUrl = id => CFG.url + '/storage/v1/object/public/photos/' + photoPath(id);
function dataUrlToBlob(u) {
  const m = /^data:([^;]+);base64,(.*)$/.exec(u || ''); if (!m) return new Blob([]);
  const bin = atob(m[2]), arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: m[1] });
}

/* outbox: writes made while offline are kept and sent later, in order */
let outbox = [];
try { outbox = JSON.parse(lsGet('motoapp.outbox') || '[]'); } catch (e) { outbox = []; }
function saveOutbox() { lsSet('motoapp.outbox', JSON.stringify(outbox)); }
const isNetErr = e => !navigator.onLine || (e && (e.name === 'TypeError' || /fetch|network|Load failed/i.test(String(e.message || e))));
async function execOp(op) {
  let r;
  if (op.op === 'upsert') r = await sb.from(op.table).upsert({ id: op.id, data: op.data });
  else if (op.op === 'delete') r = await sb.from(op.table).delete().eq('id', op.id);
  else if (op.op === 'stock') r = await sb.rpc('adjust_stock', { pid: op.id, d_on: op.dOn, d_res: op.dRes });
  else if (op.op === 'patch') r = await sb.rpc('patch_part', { pid: op.id, patch: op.data });
  else if (op.op === 'settings') r = await sb.from('settings').upsert({ id: 'shop', data: op.data });
  else if (op.op === 'photo') r = await sb.storage.from('photos').upload(photoPath(op.id), dataUrlToBlob(op.data), { contentType: 'image/jpeg', upsert: false });
  if (r && r.error) { if (op.op === 'photo' && /exists|Duplicate/i.test(r.error.message || '')) return; throw r.error; }
}
function liveFailed(e) {
  console.error(e);
  const msg = String((e && (e.message || e.code)) || '');
  if (/row-level security|permission|forbidden|42501|JWT/i.test(msg)) toast(t('read_only')); else toast(t('err_save'));
}
function dbWrite(op) {
  if (outbox.length) { outbox.push(op); saveOutbox(); flushOutbox(); return Promise.resolve(); }
  return queue(op.table + '/' + op.id, () => execOp(op)).catch(e => {
    if (isNetErr(e)) { outbox.push(op); saveOutbox(); D.sync = 'offline'; scheduleRender(); } else liveFailed(e);
  });
}
let flushing = false;
async function flushOutbox() {
  if (flushing || !outbox.length || !sb || !navigator.onLine) return;
  flushing = true;
  try {
    while (outbox.length) {
      try { await execOp(outbox[0]); outbox.shift(); saveOutbox(); }
      catch (e) { if (isNetErr(e)) break; liveFailed(e); outbox.shift(); saveOutbox(); }
    }
  } finally {
    flushing = false;
    if (!outbox.length && D.sync === 'offline') { D.sync = 'live'; scheduleRender(); }
  }
}

/* cache the last data so the app opens offline */
let cacheTimer = null;
function saveCacheSoon() {
  clearTimeout(cacheTimer);
  cacheTimer = setTimeout(() => {
    if (!isStaff()) return;
    const o = { uid: sessionUid, settings: D.settings };
    COLS.forEach(c => { o[c] = Array.from(D[c].values()); });
    lsSet('motoapp.cache', JSON.stringify(o));
  }, 1500);
}
function loadCache(uid) {
  try {
    const o = JSON.parse(lsGet('motoapp.cache') || 'null');
    if (!o || o.uid !== uid) return false;
    COLS.forEach(c => { D[c] = new Map((o[c] || []).map(x => [x.id, c === 'jobs' ? norm(x) : x])); });
    if (o.settings) applySettings(o.settings);
    return true;
  } catch (e) { return false; }
}
function applySettings(s) {
  D.settings = Object.assign(clone(DEFAULTS), s || {});
  D.settings.prices = Object.assign(clone(DEFAULTS.prices), (s && s.prices) || {});
}

async function connectLive() {
  if (!window.supabase || !window.supabase.createClient) { D.sync = 'error'; AUTH.ready = true; scheduleRender(); return; }
  sb = window.supabase.createClient(CFG.url, CFG.key, { auth: { persistSession: true, autoRefreshToken: true } });
  try { const s = JSON.parse(lsGet('motoapp.settings') || 'null'); if (s) applySettings(s); } catch (e) { /* ignore */ }
  sb.from('settings').select('data').eq('id', 'shop').maybeSingle().then(({ data }) => {
    if (data && data.data) { applySettings(data.data); lsSet('motoapp.settings', JSON.stringify(data.data)); scheduleRender(); }
  });
  sb.channel('public-settings').on('postgres_changes', { event: '*', schema: 'public', table: 'settings' }, p => {
    if (p.new && p.new.data) { applySettings(p.new.data); lsSet('motoapp.settings', JSON.stringify(p.new.data)); scheduleRender(); }
  }).subscribe();
  sb.auth.onAuthStateChange((ev, session) => { setTimeout(() => onSession(session), 0); });
  const { data } = await sb.auth.getSession();
  await onSession(data.session);
  window.addEventListener('online', () => { flushOutbox(); if (D.sync === 'offline' || D.sync === 'stale') { D.sync = 'live'; scheduleRender(); } });
  window.addEventListener('offline', () => { D.sync = 'offline'; scheduleRender(); });
  setInterval(flushOutbox, 30000);
  setInterval(() => { if (custLive() && S.view === 'track' && S.trackCode && document.visibilityState === 'visible') refreshTrack(); }, 20000);
  flushOutbox();
  if (S.trackCode && S.trackPhone) refreshTrack();
}
async function fetchAll(table, cols) {
  const out = []; let from = 0;
  for (;;) {
    const { data, error } = await sb.from(table).select(cols || 'id,data').range(from, from + 999);
    if (error) throw error;
    out.push.apply(out, data); if (data.length < 1000) break; from += 1000;
  }
  return out;
}
async function onSession(session) {
  const uid = session && session.user ? session.user.id : null;
  if (uid === sessionUid) return;
  sessionUid = uid; AUTH.user = session ? session.user : null; AUTH.profile = null;
  if (liveChan) { sb.removeChannel(liveChan); liveChan = null; }
  if (!uid) {
    AUTH.ready = true; COLS.forEach(c => { D[c] = new Map(); }); D.profiles = new Map();
    D.sync = navigator.onLine ? 'live' : 'offline';
    setRole(kindRoles(S.appKind)[0]); readHash(); render();
    return;
  }
  const { data: prof } = await sb.from('profiles').select('*').eq('id', uid).maybeSingle();
  AUTH.profile = prof || null; AUTH.ready = true;
  if (!allowedRoles().length) { readHash(); render(); return; }
  if (AUTH.profile.role === 'mechanic' || !S.me) S.me = AUTH.profile.role === 'mechanic' ? AUTH.profile.name : S.me;
  loadCache(uid);
  if (allowedRoles().indexOf(S.role) < 0) setRole(defaultRole());
  readHash();
  if (location.hash === '#signin') location.hash = S.view; else render();
  D.sync = 'connecting'; scheduleRender();
  try {
    const res = await Promise.all(COLS.map(c => fetchAll(c)).concat([fetchAll('profiles', '*')]));
    COLS.forEach((c, i) => { D[c] = new Map(res[i].map(r => { const o = Object.assign({}, r.data, { id: r.id }); return [r.id, c === 'jobs' ? norm(o) : o]; })); });
    D.profiles = new Map(res[COLS.length].map(p => [p.id, p]));
    D.sync = 'live'; saveCacheSoon();
  } catch (e) { console.error(e); D.sync = isNetErr(e) ? 'offline' : 'error'; }
  scheduleRender();
  liveChan = sb.channel('staff-' + uid);
  COLS.forEach(col => liveChan.on('postgres_changes', { event: '*', schema: 'public', table: col }, p => {
    if (p.eventType === 'DELETE') D[col].delete(p.old.id);
    else { const o = Object.assign({}, p.new.data, { id: p.new.id }); D[col].set(o.id, col === 'jobs' ? norm(o) : o); }
    saveCacheSoon(); scheduleRender();
  }));
  liveChan.on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, p => {
    if (p.eventType === 'DELETE') D.profiles.delete(p.old.id); else D.profiles.set(p.new.id, p.new);
    if (p.new && p.new.id === uid) { AUTH.profile = p.new; }
    scheduleRender();
  });
  liveChan.subscribe(status => {
    if (status === 'SUBSCRIBED') { if (D.sync !== 'error') D.sync = outbox.length ? 'offline' : 'live'; }
    else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') D.sync = 'stale';
    scheduleRender();
  });
}

/* customer calls */
async function rpc(name, args) {
  const { data, error } = await sb.rpc(name, args);
  if (error) throw error;
  return data;
}
function rpcError(e) {
  const m = String((e && e.message) || '');
  if (/slot_full/.test(m)) return t('slot_taken');
  if (/too_many/.test(m)) return t('too_many');
  if (/not_found/.test(m)) return t('not_found', { q: S.trackCode });
  if (isNetErr(e)) return t('offline_try');
  return t('err_save');
}
async function fetchSlots(day) {
  if (!day || S.slotCounts[day] === 'loading') return;
  S.slotCounts[day] = S.slotCounts[day] || 'loading';
  try { S.slotCounts[day] = await rpc('slot_counts', { d: day }) || {}; } catch (e) { S.slotCounts[day] = {}; }
  scheduleRender();
}
async function refreshTrack() {
  try {
    const res = await rpc('track', { code: S.trackCode, phone: S.trackPhone });
    S.trackJobs = (res || []).map(norm);
    if (!S.trackJobs.some(j => j.id === S.trackPick)) { const m = S.trackJobs.find(j => String(j.ref).toUpperCase() === S.trackCode.toUpperCase()); S.trackPick = m ? m.id : null; }
    S.trackErr = S.trackJobs.length ? '' : t('not_found', { q: S.trackCode });
  } catch (e) { S.trackErr = rpcError(e); }
  scheduleRender();
}
function replaceTrackJob(j) { const n = norm(j); S.trackJobs = S.trackJobs.map(x => x.id === n.id ? n : x); }

/* sign in */
function viewSignin() {
  const A2 = S.auth, up = S.authMode === 'up';
  if (AUTH.user && (!isStaff() || !allowedRoles().length)) {
    const wrong = isStaff();
    return `<div class="view"><div class="card" style="text-align:center">${ic('lock', 'xl')}<h2>${esc(t(wrong ? 'wrong_app' : 'pending_title'))}</h2><p class="sub">${esc(t(wrong ? (S.appKind === 'owner' ? 'wrong_app_owner' : 'wrong_app_worker') : 'pending_sub'))}</p>
      <p class="note">${esc(AUTH.user.email || '')}</p><button class="btn" data-act="signout">${ic('logout')}${esc(t('sign_out'))}</button></div></div>`;
  }
  return `<form class="view" data-form="auth"><div class="intro">${logoHtml()}<h1>${esc(t(up ? 'create_staff' : (S.appKind === 'owner' ? 'owner_signin' : 'staff_signin')))}</h1><p class="sub">${esc(t(up ? 'create_staff_sub' : (S.appKind === 'owner' ? 'owner_signin_sub' : 'staff_signin_sub')))}</p></div>
    <div class="card">${up ? inp('auth.name', A2.name, t('name'), { ac: 'name' }) : ''}${inp('auth.email', A2.email, t('email'), { type: 'email', ac: 'email' })}
    ${inp('auth.password', A2.password, t('password'), { type: 'password', ac: up ? 'new-password' : 'current-password' })}
    ${S.authErr ? `<p class="err" role="alert">${esc(S.authErr)}</p>` : ''}
    <button class="btn primary block" type="submit">${ic(up ? 'user' : 'lock')}${esc(t(up ? 'create_staff' : 'sign_in'))}</button>
    <button type="button" class="btn ghost block" data-act="authmode">${esc(t(up ? 'have_account' : (S.appKind === 'owner' ? 'no_account_owner' : 'no_account')))}</button></div></form>`;
}
async function doAuth() {
  const A2 = S.auth; S.authErr = '';
  if (!A2.email.trim() || A2.password.length < 6) { S.authErr = t('auth_need'); render(); return; }
  try {
    if (S.authMode === 'up') {
      const { data, error } = await sb.auth.signUp({ email: A2.email.trim(), password: A2.password, options: { data: { name: A2.name.trim() } } });
      if (error) throw error;
      if (!data.session) { S.authErr = t('check_email'); render(); return; }
    } else {
      const { error } = await sb.auth.signInWithPassword({ email: A2.email.trim(), password: A2.password });
      if (error) throw error;
    }
    S.auth = { email: '', password: '', name: '' }; S.authMode = 'in';
  } catch (e) { S.authErr = /Invalid login/i.test(e.message || '') ? t('bad_login') : (e.message || t('err_save')); render(); }
}
function staffSettingsHtml() {
  if (!LIVE || !AUTH.profile || AUTH.profile.role !== 'owner') return '';
  const ps = Array.from(D.profiles.values()).sort((a, b) => String(a.created_at).localeCompare(String(b.created_at)));
  return `<div class="card span"><h3>${esc(t('staff'))}</h3><p class="note">${esc(t('staff_hint'))}</p>
    <div class="tbl-wrap"><table class="tbl"><tbody>${ps.map(p => `<tr><td><b>${esc(p.name)}</b><br><small class="note">${esc(p.email)}</small></td>
      <td class="r"><label class="sr" for="role-${esc(p.id)}">${esc(t('role'))}</label><select class="input" style="min-height:36px;padding:4px 8px" id="role-${esc(p.id)}" data-staffrole="${esc(p.id)}"${p.id === AUTH.user.id ? ' disabled' : ''}>
      ${['pending', 'mechanic', 'desk', 'owner'].map(r => `<option value="${r}"${p.role === r ? ' selected' : ''}>${esc(t('role_' + r))}</option>`).join('')}</select></td></tr>`).join('')}</tbody></table></div></div>`;
}

/* ================= install (home-screen app) ================= */
const SITE = window.APP_SITE ? String(window.APP_SITE).replace(/\/?$/, '/') : '';
const APP_PATH = { customer: '', worker: 'staff/', owner: 'owner/' };
const appUrl = k => SITE ? SITE + APP_PATH[k] : '';
const extUrl = u => {
  const i = u.indexOf('#'), base = i >= 0 ? u.slice(0, i) : u, hash = i >= 0 ? u.slice(i) : '';
  return /[?&]openExternalBrowser=/.test(base) ? u : base + (base.indexOf('?') >= 0 ? '&' : '?') + 'openExternalBrowser=1' + hash;
};
const UA = navigator.userAgent || '';
const INST = {
  prompt: null,
  standalone: !!((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true),
  ios: /iPhone|iPad|iPod/.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1),
  android: /Android/.test(UA),
  inapp: /\bLine\//i.test(UA) ? 'line' : /FBAN|FBAV|FB_IAB|Instagram/i.test(UA) ? 'fb' : '',
  key: 'motoapp.installbar.' + KIND
};
// inside the Android app (Trusted Web Activity) there is nothing to install
try {
  if (/[?&]source=twa\b/.test(location.search) || String(document.referrer).indexOf('android-app://') === 0) sessionStorage.setItem('motoapp.twa', '1');
  if (sessionStorage.getItem('motoapp.twa')) INST.standalone = true;
} catch (e) {}
const privacyUrl = () => SITE ? SITE + 'privacy.html' : 'privacy.html';
const canInstall = () => KIND !== 'all' && !INST.standalone;
const showInstallBar = () => canInstall() && !lsGet(INST.key) && !!(INST.prompt || INST.ios || INST.inapp);
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); INST.prompt = e; scheduleRender(); });
window.addEventListener('appinstalled', () => { INST.prompt = null; INST.standalone = true; toast(t('installed')); scheduleRender(); });
function doInstall() {
  if (INST.prompt && !INST.inapp) {
    const e = INST.prompt; INST.prompt = null;
    e.prompt();
    (e.userChoice || Promise.resolve({})).then(c => { if (c && c.outcome === 'accepted') { lsSet(INST.key, '1'); } scheduleRender(); });
    return;
  }
  S.dlg = { type: 'install' }; renderDialog();
}
function installDialogHtml() {
  const steps = a => `<ol class="steps-n">${a.map(k => `<li>${esc(t(k))}</li>`).join('')}</ol>`;
  let body;
  if (INST.inapp) body = `<p>${esc(t('install_inapp'))}</p>${INST.inapp === 'line' ? `<a class="btn primary block" href="${esc(extUrl(location.href))}">${ic('globe')}${esc(t('open_browser'))}</a>` : `<p class="note">${esc(t('install_fb'))}</p>`}`;
  else if (INST.ios) body = steps(['install_ios_1', 'install_ios_2', 'install_ios_3']);
  else if (INST.android) body = steps(['install_and_1', 'install_and_2', 'install_and_3']);
  else body = `<p>${esc(t('install_pc'))}</p>`;
  return `<div class="row" style="gap:12px">${logoHtml()}<h2 style="margin:0">${esc(t('install_title'))}</h2></div>${body}<button class="btn" data-act="dlgno">${esc(t('close'))}</button>`;
}
function installBarHtml() {
  if (!showInstallBar()) return '';
  const act = INST.inapp === 'line' ? `<a class="btn sm primary" href="${esc(extUrl(location.href))}">${ic('globe')}${esc(t('open_browser'))}</a>`
    : `<button class="btn sm primary" data-act="install">${ic('download')}${esc(t('install_btn'))}</button>`;
  return `<div class="install-bar"><span>${esc(INST.inapp ? t('install_inapp') : t('install_bar'))}</span><div class="row">${act}<button class="btn sm ghost" data-act="installno">${esc(t('not_now'))}</button></div></div>`;
}
function appsCardHtml() {
  if (!SITE) return '';
  const qr = u => { try { const q = window.qrcode(0, 'M'); q.addData(extUrl(u)); q.make(); return `<img class="app-qr" alt="QR" src="${q.createDataURL(4, 2)}">`; } catch (e) { return ''; } };
  return `<div class="card span"><h3>${ic('download')}${esc(t('apps_title'))}</h3><p class="sub">${esc(t('apps_note'))}</p><div class="apps-grid">${['customer', 'worker', 'owner'].map(k => {
    const u = appUrl(k);
    return `<div class="app-tile"><div class="app-head"><img class="app-ic" alt="" src="${esc(u)}icon-192.png" onerror="this.style.visibility='hidden'"><span><b>${esc(t('app_' + k))}</b><br><small class="note">${esc(t('apps_for_' + k))}</small></span></div>
      ${typeof window.qrcode === 'function' ? qr(u) : ''}<a class="mono app-url" href="${esc(u)}" target="_blank" rel="noopener">${esc(u.replace(/^https?:\/\//, ''))}</a>
      <div class="app-acts"><button type="button" class="btn sm" data-act="copyapp" data-v="${k}">${ic('copy')}${esc(t('copy_link'))}</button>${navigator.share ? `<button type="button" class="btn sm" data-act="shareapp" data-v="${k}">${ic('send')}${esc(t('share'))}</button>` : ''}</div></div>`;
  }).join('')}</div></div>`;
}

/* ================= routing ================= */
const VIEWS = ['signin', 'book', 'track', 'shop', 'myjobs', 'stock', 'today', 'board', 'newjob', 'dash', 'reports', 'settings'];
const VIEW_ROLES = { signin: ['customer', 'mechanic', 'desk', 'owner'], shop: ['customer'], book: ['customer'], track: ['customer'], myjobs: ['mechanic'], today: ['desk', 'owner'], newjob: ['desk', 'owner'], dash: ['owner'], reports: ['owner'], settings: ['owner'],
  board: ['desk', 'owner'], stock: ['mechanic', 'desk', 'owner'], job: ['mechanic', 'desk', 'owner'], part: ['mechanic', 'desk', 'owner'] };
function setRole(r) { S.role = r; lsSet('motoapp.role', r); }
function readHash() {
  const h = location.hash.replace(/^#/, '');
  let v = null, id = null;
  if (h.indexOf('job-') === 0) { v = 'job'; id = h.slice(4); }
  else if (h.indexOf('part-') === 0) { v = 'part'; id = h.slice(5); }
  else if (VIEWS.indexOf(h) >= 0) v = h;
  if (!v) v = HOME[S.role];
  if (!LIVE || AUTH.ready) {
    const al = allowedRoles();
    if (!al.length) v = 'signin';
    else {
      if (v === 'signin' && (!LIVE || S.appKind === 'customer' || isStaff())) v = HOME[al[0]];
      if (v !== 'signin' && !(VIEW_ROLES[v] || []).some(x => al.indexOf(x) >= 0)) v = HOME[al.indexOf(S.role) >= 0 ? S.role : al[0]];
      const okR = (VIEW_ROLES[v] || []).filter(x => al.indexOf(x) >= 0);
      if (okR.length && okR.indexOf(S.role) < 0) setRole(okR[0]);
    }
  }
  if (v === 'job' && id !== S.id) { S.tab = S.pendingTab || ''; S.line = blankLine(); S.lineQ = ''; S.note = ''; S.notePhoto = null; S.dviNotes = {}; S.discPct = ''; S.pay = { method: 'cash', amount: '' }; S.chatText = ''; S.taskText = ''; }
  if (v === 'part' && id !== S.id) { S.partDraft = null; S.recv = { qty: '', cost: '' }; S.cnt = ''; }
  S.view = v; S.id = id; S.pendingTab = null;
  if (v === 'settings') S.setDraft = clone(D.settings);
  if (v !== 'job' && v !== 'part') S.lastStaff[S.role] = v;
}
function go(view, id) {
  const h = view === 'job' ? 'job-' + id : view === 'part' ? 'part-' + id : view;
  if (location.hash.replace(/^#/, '') === h) { readHash(); render(); window.scrollTo(0, 0); }
  else location.hash = h;
}
window.addEventListener('hashchange', () => { readHash(); render(); window.scrollTo(0, 0); });

/* ================= render ================= */
let pending = false;
function typing() {
  const a = document.activeElement;
  if (!a) return false;
  if (a.tagName === 'TEXTAREA') return true;
  if (a.tagName === 'INPUT') return ['checkbox', 'radio', 'file', 'button', 'submit'].indexOf(a.type) < 0;
  return false;
}
function scheduleRender() { if (typing()) { pending = true; return; } render(); }
document.addEventListener('focusout', () => { if (pending) setTimeout(() => { if (!typing() && pending) render(); }, 0); });

function render() {
  pending = false;
  document.documentElement.lang = lang;
  const shell = document.getElementById('shell');
  shell.classList.toggle('wide', S.role === 'desk' || S.role === 'owner');
  shell.classList.toggle('mech', S.role === 'mechanic');
  renderTop(); renderNav();
  if (LIVE && !AUTH.ready && S.role !== 'customer') { document.getElementById('main').innerHTML = `<div class="view"><div class="empty">${ic('lock')}${esc(t('sync_connecting'))}</div></div>`; renderDialog(); return; }
  const V = { signin: viewSignin, shop: viewShop, book: viewBook, track: viewTrack, myjobs: viewMyJobs, stock: viewStock, today: viewToday, board: viewBoard, newjob: viewNewJob, dash: viewDash, reports: viewReports, settings: viewSettings, job: viewJob, part: viewPart };
  document.getElementById('main').innerHTML = (V[S.view] || viewBook)();
  renderDialog();
  hydratePhotos(); tickTimers();
  document.documentElement.style.setProperty('--toph', document.getElementById('top').offsetHeight + 'px');
}
function renderTop() {
  const s = D.settings, bs = branches();
  document.getElementById('top').innerHTML =
    `<div class="top-row"><div class="brand-wrap">${logoHtml()}<div class="brand"><div class="brand-name">${esc(s.name || DEFAULTS.name)}</div><div class="brand-sub">${S.appKind !== 'customer' ? `<span class="appbadge">${esc(t('badge_' + S.appKind))}</span>` : ''}${esc(s.address || t('tagline'))}</div></div></div>
    <div class="seg" role="group" aria-label="Language"><button data-act="lang" data-v="th" aria-pressed="${lang === 'th'}">TH</button><button data-act="lang" data-v="en" aria-pressed="${lang === 'en'}">EN</button></div></div>
    ${KIND === 'all' ? `<div class="roles apps"><div class="seg" role="group" aria-label="App">${['customer', 'worker', 'owner'].map(k => `<button data-act="appkind" data-v="${k}" aria-pressed="${S.appKind === k}">${ic(k === 'customer' ? 'user' : k === 'worker' ? 'wrench' : 'crown')}${esc(t('app_' + k))}</button>`).join('')}</div></div>` : ''}
    ${allowedRoles().length > 1 && S.view !== 'signin' ? `<div class="roles"><div class="seg" role="group" aria-label="Role">${allowedRoles().map(r => `<button data-act="role" data-v="${r}" aria-pressed="${S.role === r}">${ic(ROLE_IC[r])}${esc(t('role_' + r))}</button>`).join('')}</div></div>` : ''}
    <div class="meta-row"><span class="sync ${D.sync}"><i></i>${esc(t('sync_' + D.sync))}</span><span class="row" style="gap:6px">
    ${canInstall() ? `<button class="btn sm ghost" data-act="install">${ic('download', 'sm')}${esc(t('install_btn'))}</button>` : ''}
    ${LIVE && S.appKind !== 'customer' ? (AUTH.user ? `<button class="btn sm ghost" data-act="signout">${ic('logout', 'sm')}${esc(isStaff() ? (AUTH.profile.name || t('sign_out')) : t('sign_out'))}</button>` : (S.view === 'signin' ? '' : `<button class="btn sm ghost" data-act="go" data-v="signin">${ic('lock', 'sm')}${esc(t('staff_btn'))}</button>`)) : ''}
    ${bs.length > 1 && S.role !== 'customer' ? `<label class="note" for="f-branch">${esc(t('branch'))} <select id="f-branch" data-act="branch">${bs.map(b => `<option${b === curBranch() ? ' selected' : ''}>${esc(b)}</option>`).join('')}</select></label>` : ''}</span></div>${installBarHtml()}`;
}
function renderNav() {
  if (S.view === 'signin') { document.getElementById('nav').innerHTML = ''; return; }
  const cur = S.view === 'job' ? (S.role === 'mechanic' ? 'myjobs' : 'board') : S.view === 'part' ? 'stock' : S.view;
  document.getElementById('nav').innerHTML = '<div class="nav-in">' + NAV[S.role].map(v => {
    const b = navBadge(v);
    return `<a href="#${v}"${cur === v ? ' aria-current="page"' : ''}>${ic(NAV_IC[v])}<span>${esc(t('nav_' + v))}</span>${b ? `<span class="badge">${b}</span>` : ''}</a>`;
  }).join('') + '</div>';
}
function navBadge(v) {
  if (v === 'today') return attentionList().length;
  if (v === 'dash') return pendingApprovals().length;
  if (v === 'myjobs') return S.me ? jobsHere().filter(j => j.mechanic === S.me && ['received', 'approved', 'parts_wait'].indexOf(j.status) >= 0).length : 0;
  if (v === 'stock' && S.role !== 'mechanic') return partsHere().filter(isLow).length;
  return 0;
}

/* ================= shared pieces ================= */
function plate(v) {
  if (!v || (!v.series && !v.number)) return '';
  const lbl = esc(t('plate') + ' ' + plateText(v));
  if (v.type === 'car') return `<span class="plate car" aria-label="${lbl}"><span class="p-top">${esc(v.series)} ${esc(v.number)}</span><span class="p-p">${esc(v.province)}</span></span>`;
  return `<span class="plate" aria-label="${lbl}"><span class="p-s">${esc(v.series)}</span><span class="p-p">${esc(v.province)}</span><span class="p-n">${esc(v.number)}</span></span>`;
}
const pill = (s, cust) => `<span class="pill st-${s}">${esc(stLabel(s, cust))}</span>`;
function fid(bind) { return 'f-' + bind.replace(/[^a-zA-Z0-9]/g, '-'); }
function inp(bind, val, label, o) {
  o = o || {};
  return `<div class="field"><label for="${fid(bind)}">${esc(label)}</label><input class="input" id="${fid(bind)}" data-bind="${bind}" value="${esc(val)}"${o.type ? ` type="${o.type}"` : ''}${o.mode ? ` inputmode="${o.mode}"` : ''}${o.ph ? ` placeholder="${esc(o.ph)}"` : ''}${o.list ? ` list="${o.list}"` : ''}${o.ac ? ` autocomplete="${o.ac}"` : ''}${o.dis ? ' disabled' : ''}></div>`;
}
function photoTile(target, val, cap) {
  const id = 'f-ph-' + target.replace(/[^a-z0-9]/gi, '-');
  return `<div class="shot"><label for="${id}">${val ? `<img alt="" src="${esc(val)}">` : `<span class="shot-empty">${ic('camera')}</span>`}<span class="shot-cap">${esc(cap)}</span></label>
    <input type="file" accept="image/*" capture="environment" id="${id}" data-photo-target="${target}"></div>`;
}
function photoPicker(target, val, label) {
  const id = fid('ph-' + target);
  return `<div class="photo-pick">${val ? `<img class="thumb" alt="" src="${esc(val)}">` : ''}<label class="btn sm" for="${id}">${ic('camera')}${esc(label || (val ? t('change_photo') : t('add_photo')))}</label>
    <input type="file" accept="image/*" id="${id}" data-photo-target="${target}">${val ? `<button type="button" class="btn sm ghost" data-act="clearphoto" data-v="${target}">${esc(t('remove'))}</button>` : ''}</div>`;
}
function vehicleFields(o, f, staff) {
  const car = f.vtype === 'car';
  return `<div class="seg" role="group" aria-label="${esc(t('vtype'))}"><button type="button" data-act="pick" data-k="${o}.vtype" data-v="bike" aria-pressed="${!car}">${ic('scooter')}${esc(t('vt_bike'))}</button><button type="button" data-act="pick" data-k="${o}.vtype" data-v="car" aria-pressed="${car}">${ic('car')}${esc(t('vt_car'))}</button></div>
    <div class="section"><span class="lbl">${esc(t('brand'))}</span><div class="chips">${BRANDS[car ? 'car' : 'bike'].map(b => `<button type="button" class="chip sm" data-act="pick" data-k="${o}.brand" data-v="${b}" aria-pressed="${f.brand === b}">${esc(b === 'other' ? t('other') : b)}</button>`).join('')}</div></div>
    <div class="grid2">${inp(o + '.model', f.model, t('model'), { ph: t(car ? 'model_ph_car' : 'model_ph_bike') })}${inp(o + '.year', f.year, t('year'), { mode: 'numeric', ph: '2020' })}</div>
    <div class="section"><span class="lbl">${esc(t('plate'))}</span><div class="grid3">${inp(o + '.series', f.series, t('plate_series'), { ph: car ? '1กข' : '1กข' })}${inp(o + '.number', f.number, t('plate_number'), { ph: '1234', mode: 'numeric' })}${inp(o + '.province', f.province, t('plate_province'), { list: 'provinces' })}</div>
    <datalist id="provinces">${PROVINCES.map(p => `<option value="${p}">`).join('')}</datalist></div>
    ${car || staff ? `<div class="grid2">${car ? inp(o + '.vin', f.vin, t('vin'), { ph: 'MR2…' }) : '<span></span>'}${staff ? inp(o + '.mileage', f.mileage, t('mileage'), { mode: 'numeric' }) : ''}</div>` : ''}`;
}
function contactFields(o, f) {
  return `<div class="grid2">${inp(o + '.name', f.name, t('name'), { ac: 'name' })}${inp(o + '.phone', f.phone, t('phone'), { type: 'tel', mode: 'tel', ac: 'tel' })}</div>${inp(o + '.line', f.line, t('line_id'))}`;
}
function serviceChips(o, f) {
  return '<div class="svc-grid">' + SERVICES.filter(s => s.for === 'both' || s.for === f.vtype).map(s => {
    const p = priceFor(s.key, f.vtype);
    return `<button type="button" class="chip" data-act="pick" data-k="${o}.service" data-v="${s.key}" aria-pressed="${f.service === s.key}"><span class="ibox">${ic(SVC_IC[s.key])}</span><span>${esc(svcName(s.key))}<small>${esc(p > 0 ? t('from_price', { p: p.toLocaleString('en-US') }) : t('quote_after'))}</small></span></button>`;
  }).join('') + '</div>';
}
const roBanner = () => D.readonly ? `<div class="banner">${esc(t('read_only'))}</div>` : '';
function tagCard(j, o) {
  o = o || {};
  const tt = totals(j), when = j.source === 'walkin' ? t('walkin') + ' · ' + fmtDay(j.date) : fmtDay(j.date) + ' ' + j.time;
  const flags = [];
  if (!o.cust) {
    if (unreadChat(j)) flags.push(`<span class="mini info">${esc(t('chat'))}</span>`);
    if (j.lines.some(l => l.stock === 'needed' && l.state === 'approved')) flags.push(`<span class="mini bad">${esc(t('s_needed'))}</span>`);
    if (j.discount.status === 'pending' || j.ownerOk === 'pending') flags.push(`<span class="mini warn">${esc(t('est_waiting_owner'))}</span>`);
    if (S.me && j.timers && j.timers[S.me]) flags.push(`<span class="mini ok">${esc(t('running'))}</span>`);
    if (j.example) flags.push(`<span class="tagchip">Example</span>`);
  }
  return `<button class="tag st-${j.status}${o.compact ? ' compact' : ''}" data-act="${o.act || 'open'}" data-v="${esc(j.id)}">
    <span class="tag-hole" aria-hidden="true"></span>
    <span class="tag-top"><span class="ref">${esc(j.ref)}</span><span class="when">${esc(when)}</span>${pill(j.status, o.cust)}</span>
    <span class="tag-mid">${plate(j.vehicle)}<span class="vname"><b>${esc(vName(j.vehicle))}</b><small>${esc(svcName(j.service))}</small></span></span>
    ${o.cust ? '' : `<span class="tag-bot"><span>${esc(j.customer.name)}</span>${j.mechanic ? `<span>· ${esc(j.mechanic)}</span>` : ''}${flags.join('')}${tt.total && S.role !== 'mechanic' ? `<span class="amt">${baht(tt.total)}</span>` : ''}</span>`}
  </button>`;
}
function unreadChat(j) {
  const last = (j.chat || []).filter(m => m.from === 'customer').slice(-1)[0];
  return !!last && (!j.shopSeen || last.at > j.shopSeen);
}
function contactCard() {
  const s = D.settings;
  if (!s.phone && !s.line) return '';
  return `<div class="card"><h3>${esc(t('shop_contact'))}</h3><dl class="dl">${s.phone ? `<dt>${esc(t('phone'))}</dt><dd><a class="tel" href="tel:${esc(digits(s.phone))}">${esc(s.phone)}</a></dd>` : ''}${s.line ? `<dt>LINE</dt><dd>${esc(s.line)}</dd>` : ''}</dl></div>`;
}
function linesHtml(j, o) {
  o = o || {};
  const ls = j.lines.filter(o.filter || (() => true));
  if (!ls.length) return `<p class="note">${esc(t('no_lines'))}</p>`;
  const showPrice = S.role !== 'mechanic';
  return '<div class="lines">' + ls.map(l => {
    const q = Number(l.qty) || 0, chips = [];
    chips.push(esc(t(l.kind === 'labour' ? 'labour' : 'part')));
    if (o.states) chips.push(`<span class="mini ${l.state === 'approved' ? 'ok' : l.state === 'declined' ? 'bad' : 'warn'}">${esc(t('ls_' + l.state))}</span>`);
    if (l.extra && l.state === 'proposed') chips.push(`<span class="mini info">${esc(t('new_item'))}</span>`);
    if (o.stock && l.kind === 'part' && l.stock !== 'none') chips.push(`<span class="mini ${l.stock === 'fitted' ? 'ok' : l.stock === 'needed' ? 'bad' : 'info'}">${esc(t('s_' + l.stock))}</span>`);
    let right = showPrice ? `<span class="amt">${baht(lineAmt(l))}</span>` : '<span></span>';
    if (o.edit && can('price') && l.state === 'proposed') right = `<input class="input price-in" aria-label="${esc(t('price') + ' ' + l.desc)}" inputmode="decimal" data-price="${esc(l.id)}" value="${esc(l.price)}">`;
    let acts = '';
    if (o.edit && l.state !== 'declined') {
      const a = [];
      if (l.kind === 'part' && l.state === 'approved' && l.stock !== 'fitted' && can('parts_use')) {
        if (l.partId && l.stock === 'none') a.push(`<button class="btn sm" data-act="reserve" data-v="${esc(l.id)}">${ic('lock')}${esc(t('reserve'))}</button>`);
        a.push(`<button class="btn sm primary" data-act="fit" data-v="${esc(l.id)}">${ic('camera')}${esc(t('fit'))}</button>`);
        if (l.stock !== 'needed') a.push(`<button class="btn sm" data-act="needpart" data-v="${esc(l.id)}">${ic('truck')}${esc(t('need_part'))}</button>`);
        if (l.stock === 'reserved' && can('stock_edit')) a.push(`<button class="btn sm ghost" data-act="unreserve" data-v="${esc(l.id)}">${esc(t('unreserve'))}</button>`);
      }
      if (can('estimate') && l.stock !== 'fitted') a.push(`<button class="btn sm ghost" data-act="delline" data-v="${esc(l.id)}" aria-label="${esc(t('remove') + ' ' + l.desc)}">${esc(t('remove'))}</button>`);
      if (a.length) acts = `<div class="acts">${a.join('')}</div>`;
    }
    const pair = l.kind === 'part' ? `${proofMetaHtml(l)}${o.stock ? proofTrioHtml(l) : ''}` : '';
    return `<div class="line ${l.state}"><span><span class="kind">${chips.join(' ')}</span><span class="desc">${esc(l.desc)}${q !== 1 ? ' × ' + q : ''}</span></span>${right}${pair}${acts}</div>`;
  }).join('') + '</div>';
}
function totalsHtml(j, tt) {
  return `<div class="tot">${tt.disc || D.settings.vat ? `<span>${esc(t('subtotal'))}</span><span class="amt">${baht(tt.sub)}</span>` : ''}
    ${tt.disc ? `<span>${esc(t('discount'))} ${discOn(j)}%</span><span class="amt">−${baht(tt.disc)}</span>` : ''}
    ${D.settings.vat ? `<span>${esc(t('vat'))}</span><span class="amt">${baht(tt.vat)}</span>` : ''}
    <span class="grand">${esc(t('total'))}</span><span class="amt grand">${baht(tt.total)}</span>
    ${tt.paid ? `<span>${esc(t('paid'))}</span><span class="amt">${baht(tt.paid)}</span><span><b>${esc(tt.due > 0 ? t('due') : t('fully_paid'))}</b></span><span class="amt"><b>${tt.due > 0 ? baht(tt.due) : ''}</b></span>` : ''}</div>`;
}
function stepperHtml(j, cust) {
  const reached = {}; j.timeline.forEach(e => { if (e.kind === 'status') reached[e.status] = e.at; });
  const cur = j.status, idx = STAGES.indexOf(cur);
  const list = STAGES.filter(s => {
    if (s === 'booked') return !!reached.booked || cur === 'booked';
    if (s === 'parts_wait' || s === 'parts_replaced') return !!reached[s] || cur === s;
    return true;
  });
  return '<ol class="steps">' + list.map(s => {
    const i = STAGES.indexOf(s);
    let cls = cur === 'cancelled' ? (reached[s] ? 'done' : 'future') : i < idx ? 'done' : i === idx ? 'now' : 'future';
    if (s === cur && s === 'completed') cls = 'done';
    return `<li class="step ${cls}"><span class="dot">${ic(cls === 'done' ? 'check' : ST_IC[s])}</span><span class="s-name">${esc(stLabel(s, cust))}</span><span class="s-time">${reached[s] ? esc(fmtWhen(reached[s])) : ''}</span></li>`;
  }).join('') + '</ol>';
}
function dviReport(j, editable) {
  if (!j.dvi.length) return '';
  const c = dviCount(j);
  return `<div class="dvi-sum"><span class="mini bad">${c.red} ${esc(t('rb_red'))}</span><span class="mini warn">${c.yellow} ${esc(t('rb_yellow'))}</span><span class="mini ok">${c.green} ${esc(t('rb_green'))}</span></div>` +
    j.dvi.slice().sort((a, b) => ({ red: 0, yellow: 1, green: 2 }[a.rating] ?? 3) - ({ red: 0, yellow: 1, green: 2 }[b.rating] ?? 3)).map(d => {
      if (editable) {
        const note = S.dviNotes[d.key] != null ? S.dviNotes[d.key] : d.note;
        return `<div class="dvi-row"><div class="dvi-head"><span class="dot-r ${d.rating || ''}"></span><b>${esc(t('dvi_' + d.key))}</b></div>
          <div class="rate">${['green', 'yellow', 'red'].map(r => `<button class="${r[0]}" data-act="rate" data-k="${d.key}" data-v="${r}" aria-pressed="${d.rating === r}">${esc(t('rb_' + r))}</button>`).join('')}</div>
          ${inp('dviNotes.' + d.key, note, t('dvi_note_ph'))}
          ${d.photo ? `<img class="photo-big" alt="" data-photo="${esc(d.photo)}">` : ''}${photoPicker('dvi:' + d.key, null, d.photo ? t('change_photo') : t('add_photo'))}</div>`;
      }
      if (!d.rating) return '';
      return `<div class="dvi-row"><div class="dvi-head"><span class="dot-r ${d.rating}"></span><b>${esc(t('dvi_' + d.key))}</b><span class="note">${esc(t('r_' + d.rating))}</span></div>
        ${d.note ? `<p>${esc(d.note)}</p>` : ''}${d.photo ? `<img class="photo-big" alt="" data-photo="${esc(d.photo)}">` : ''}</div>`;
    }).join('');
}
const PROOF_KINDS = ['before', 'box', 'after'];
const PT_CLS = { genuine: 'ok', aftermarket: 'info', used: 'warn' };
function proofTrioHtml(l) {
  const cells = [['before', 'cap_old'], ['box', 'cap_box'], ['after', 'cap_fitted']].filter(c => l[c[0]]);
  if (!cells.length) return '';
  return `<div class="trio n${cells.length}">${cells.map(c => `<div class="ph"><img alt="${esc(t(c[1]) + ': ' + l.desc)}" data-photo="${esc(l[c[0]])}"><span>${esc(t(c[1]))}</span></div>`).join('')}</div>`;
}
function proofMetaHtml(l) {
  const bits = [];
  if (l.ptype) bits.push(`<span class="mini ${PT_CLS[l.ptype] || 'info'}">${esc(t('pt_' + l.ptype))}</span>`);
  if (l.brand) bits.push(`<span>${esc(t('part_brand'))} <b>${esc(l.brand)}</b></span>`);
  if (l.partNo) bits.push(`<span>${esc(t('part_no'))} <b class="mono">${esc(l.partNo)}</b></span>`);
  return bits.length ? `<div class="pmeta">${bits.join('')}</div>` : '';
}
function oldStatusText(j, l) {
  if (l.oldPart === 'dispose') return t('old_status_dispose');
  if (l.oldPart === 'return') return j.oldGivenAt ? t('old_status_given', { d: fmtWhen(j.oldGivenAt) }) : t('old_status_return');
  return '';
}
function proofCardHtml(j) {
  const ls = j.lines.filter(l => l.kind === 'part' && l.state === 'approved' && l.stock === 'fitted');
  if (!ls.length) return '';
  return `<div class="card"><h3>${ic('shield')}${esc(t('proof_title'))}</h3><p class="sub">${esc(t('proof_intro'))}</p>
    <div class="proofs">${ls.map(l => { const q = Number(l.qty) || 0, os = oldStatusText(j, l);
      return `<div class="proof"><b class="pdesc">${esc(l.desc)}${q !== 1 ? ' × ' + q : ''}</b>${proofMetaHtml(l)}${proofTrioHtml(l)}
        <p class="note">${l.fittedAt ? esc(t('fitted_by', { d: fmtWhen(l.fittedAt), m: l.fittedBy || '' })) : ''}${os ? (l.fittedAt ? ' · ' : '') + esc(os) : ''}</p></div>`; }).join('')}</div></div>`;
}
const FUEL = ['E', '1/4', '1/2', '3/4', 'F'];
const fuelLabel = f => ({ '1/4': '¼', '1/2': '½', '3/4': '¾' })[f] || f || '';
function odoSideHtml(j, side, edit) {
  const o = (j.odo || {})[side];
  if (o) return `<div class="odo-side"><span class="lbl">${esc(t('odo_' + side))}</span><div class="ph"><img alt="${esc(t('odo_photo'))}" data-photo="${esc(o.photo)}"></div>
    <p class="odo-read"><b class="mono">${esc(Number(o.km).toLocaleString('en-US'))} km</b> · ${esc(t('fuel'))} <b>${esc(fuelLabel(o.fuel))}</b></p><small class="note">${esc(fmtWhen(o.at))}${o.by ? ' · ' + esc(o.by) : ''}</small></div>`;
  const can_ = edit && (side === 'in' || (j.odo && j.odo.in));
  return `<div class="odo-side"><span class="lbl">${esc(t('odo_' + side))}</span>${can_ ? `<button class="btn sm" data-act="odo" data-v="${side}">${ic('camera')}${esc(t('odo_record_' + side))}</button>` : `<p class="note">${esc(t('not_yet'))}</p>`}</div>`;
}
function odoCardHtml(j, edit) {
  const o = j.odo || {};
  if (!edit && !o.in && !o.out) return '';
  const driven = o.in && o.out ? Number(o.out.km) - Number(o.in.km) : null;
  return `<div class="card"><h3>${ic('gauge')}${esc(t('odo_title'))}</h3>${edit && !o.in ? `<p class="sub">${esc(t('odo_hint'))}</p>` : ''}
    <div class="odo">${odoSideHtml(j, 'in', edit)}${odoSideHtml(j, 'out', edit)}</div>
    ${driven != null && driven >= 0 ? `<p class="note">${esc(t('km_driven', { n: driven.toLocaleString('en-US') }))}</p>` : ''}</div>`;
}
function galleryHtml(j, opt) {
  const skip = opt && opt.skipProof;
  const all = skip ? j.photos.filter(p => !(p.lineId && PROOF_KINDS.indexOf(p.kind) >= 0) && p.kind !== 'odo_in' && p.kind !== 'odo_out') : j.photos;
  if (!all.length) return `<p class="note">${esc(t('no_photos'))}</p>`;
  const lineOf = id => j.lines.find(l => l.id === id);
  return STAGES.concat(['cancelled']).map(s => {
    const ps = all.filter(p => (p.stage || 'received') === s);
    if (!ps.length) return '';
    const done = {}, out = [];
    ps.forEach(p => {
      if (PROOF_KINDS.indexOf(p.kind) >= 0 && p.lineId) {
        if (done[p.lineId]) return; done[p.lineId] = 1;
        const l = lineOf(p.lineId), cap = { before: 'cap_old', box: 'cap_box', after: 'cap_fitted' };
        const cells = PROOF_KINDS.map(k => ps.find(x => x.lineId === p.lineId && x.kind === k)).filter(Boolean);
        out.push(`<div class="ph" style="grid-column:1/-1"><b>${esc(l ? l.desc : '')}</b><div class="trio n${cells.length}">${cells.map(c => `<div class="ph"><img alt="" data-photo="${esc(c.id)}"><span>${esc(t(cap[c.kind]))}</span></div>`).join('')}</div></div>`);
      } else {
        const label = p.kind === 'dvi' && p.item ? t('dvi_' + p.item) : p.kind === 'customer' ? t('customer') : p.kind === 'odo_in' || p.kind === 'odo_out' ? t('odo_title') + ' · ' + t(p.kind) : (p.caption || '');
        out.push(`<div class="ph"><img alt="" data-photo="${esc(p.id)}"><span>${esc(label)} ${esc(fmtWhen(p.at))}</span></div>`);
      }
    });
    return `<div class="section"><span class="lbl">${esc(stLabel(s))}</span><div class="gallery">${out.join('')}</div></div>`;
  }).join('');
}
function chatHtml(j, mine) {
  const msgs = j.chat || [];
  return `<div class="chat">${msgs.length ? msgs.map(m => `<div class="msg${m.from === mine ? ' me' : ''}"><span class="meta">${esc(m.name || '')} · ${esc(fmtWhen(m.at))}</span><span>${esc(m.text)}</span></div>`).join('') : `<p class="note">${esc(t('no_chat'))}</p>`}</div>
    <form class="row" data-form="chat" data-id="${esc(j.id)}"><label class="sr" for="f-chatText">${esc(t('chat_ph'))}</label><input class="input" style="flex:1;min-width:0" id="f-chatText" data-bind="chatText" value="${esc(S.chatText)}" placeholder="${esc(t('chat_ph'))}" autocomplete="off"><button class="btn dark" type="submit" aria-label="${esc(t('send'))}">${ic('send')}</button></form>`;
}
function receiptHtml(j) {
  const s = D.settings, tt = totals(j);
  return `<div class="receipt"><div class="r-head">${logoSrc(true) ? logoHtml('logo full') : ''}<div class="r-shop">${esc(s.name)}</div>${s.address ? `<div>${esc(s.address)}</div>` : ''}${s.phone ? `<div>${esc(t('phone'))} ${esc(s.phone)}</div>` : ''}</div>
    <div class="r-rule"></div><div><b>${esc(t('invoice'))} ${esc(j.ref)}</b><br>${esc(fmtLong(today()))}<br>${esc(vName(j.vehicle))}${plateText(j.vehicle) ? ' · ' + esc(plateText(j.vehicle)) : ''}${j.vehicle.vin ? '<br>VIN ' + esc(j.vehicle.vin) : ''}<br>${esc(j.customer.name)}</div>
    <div class="r-rule"></div>${linesHtml(j, { filter: l => l.state === 'approved' })}${totalsHtml(j, tt)}<div class="r-rule"></div><div style="text-align:center">${esc(t('thanks'))}</div></div>`;
}
function historyHtml(j, cust) {
  const pk = plateKey(j.vehicle), vin = (j.vehicle.vin || '').trim().toUpperCase();
  const others = (custLive() ? S.trackJobs : Array.from(D.jobs.values())).filter(x => x.id !== j.id && ((pk && plateKey(x.vehicle) === pk) || (vin && (x.vehicle.vin || '').toUpperCase() === vin)))
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  if (!others.length) return `<p class="note">${esc(t('no_history'))}</p>`;
  const fitted = [];
  others.forEach(x => x.lines.forEach(l => { if (l.stock === 'fitted') fitted.push({ l: l, x: x }); }));
  return `<div class="tags">${others.map(x => tagCard(x, { compact: true, cust: cust, act: cust ? 'trackpick' : 'open' })).join('')}</div>` +
    (fitted.length ? `<div class="section"><span class="lbl">${esc(t('s_fitted'))}</span><div class="tbl-wrap"><table class="tbl"><tbody>${fitted.map(f => `<tr><td>${esc(f.l.desc)}</td><td>${esc(f.x.ref)}</td><td class="r">${esc(f.l.fittedAt ? fmtDay(dayOf(f.l.fittedAt)) : '')}</td></tr>`).join('')}</tbody></table></div></div>` : '');
}

/* ================= customer ================= */
function viewShop() {
  const s = D.settings, closed = Number(s.closedDay);
  const dayName = d => new Intl.DateTimeFormat(loc(), { weekday: 'long' }).format(new Date(2026, 10, 15 + d));
  const map = s.address ? 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.address) : '';
  const cell = (ok, p) => !ok ? '—' : p > 0 ? baht(p) : esc(t('price_check'));
  return `<div class="view"><div class="card shop-hero">${logoHtml('logo big')}<h1>${esc(s.name || DEFAULTS.name)}</h1><p class="sub">${esc(s.address || t('tagline'))}</p>
      ${s.phone || map ? `<div class="grid2" style="width:100%">${s.phone ? `<a class="btn primary" href="tel:${esc(digits(s.phone))}">${ic('phone')}${esc(t('call_shop'))}</a>` : ''}${map ? `<a class="btn" href="${esc(map)}" target="_blank" rel="noopener">${ic('pin')}${esc(t('directions'))}</a>` : ''}</div>` : ''}
      ${s.phone ? `<p class="note">${esc(s.phone)}</p>` : ''}</div>
    <div class="grid2"><div class="card"><h3>${esc(t('shop_hours'))}</h3><p class="row">${ic('timer')}<b>${pad(Number(s.open))}:00 – ${pad(Number(s.close))}:00</b></p><p class="note">${esc(closed >= 0 ? t('closed_on_d', { d: dayName(closed) }) : t('none'))}</p></div>
      <div class="card"><h3>LINE</h3><p class="row">${ic('chat')}<b>${esc(s.line || '—')}</b></p></div></div>
    <div class="card"><h3>${esc(t('svc_prices'))}</h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th class="r">${ic('scooter')}</th><th class="r">${ic('car')}</th></tr></thead><tbody>
      ${SERVICES.map(sv => `<tr><td><span class="row" style="flex-wrap:nowrap">${ic(SVC_IC[sv.key])}${esc(svcName(sv.key))}</span></td><td class="r">${cell(sv.for !== 'car', priceFor(sv.key, 'bike'))}</td><td class="r">${cell(sv.for !== 'bike', priceFor(sv.key, 'car'))}</td></tr>`).join('')}
      </tbody></table></div><p class="note">${esc(t('from_note'))}</p></div>
    <button class="btn primary block" data-act="go" data-v="book">${ic('calendar')}${esc(t('book_now'))}</button>
    <p class="note" style="text-align:center"><a href="${esc(privacyUrl())}" target="_blank" rel="noopener">${esc(t('privacy'))}</a></p></div>`;
}
function openDays() {
  const out = [], s = D.settings;
  for (let i = 0; i < 21 && out.length < 7; i++) {
    const day = addDays(today(), i);
    if (Number(s.closedDay) >= 0 && parseYmd(day).getDay() === Number(s.closedDay)) continue;
    if (!slotsFor(day).length) continue;
    out.push(day);
  }
  return out;
}
function slotsFor(day) {
  const s = D.settings, out = [], now = new Date(), isToday = day === today();
  for (let h = Number(s.open); h < Number(s.close); h++) { if (isToday && h <= now.getHours()) continue; out.push(pad(h) + ':00'); }
  return out;
}
const slotUsed = (day, time) => custLive() ? (((S.slotCounts[day] && typeof S.slotCounts[day] === 'object') ? S.slotCounts[day][time] : 0) || 0) : jobsHere().filter(j => j.date === day && j.time === time && j.status !== 'cancelled' && j.source !== 'walkin').length;
function viewBook() {
  if (custLive() && S.booked) return viewBooked(S.booked);
  if (!custLive() && S.bookedId && D.jobs.get(S.bookedId)) return viewBooked(D.jobs.get(S.bookedId));
  if (custLive() && S.form.date && S.slotCounts[S.form.date] === undefined) fetchSlots(S.form.date);
  const f = S.form, days = openDays(), cap = Math.max(1, Number(D.settings.perSlot) || 1);
  if (f.date && days.indexOf(f.date) < 0) { f.date = ''; f.time = ''; }
  let slots = `<p class="note">${esc(t('pick_day'))}</p>`;
  if (f.date) {
    const sl = slotsFor(f.date);
    slots = sl.length ? '<div class="slots">' + sl.map(tm => {
      const left = cap - slotUsed(f.date, tm), full = left <= 0;
      if (full && f.time === tm) f.time = '';
      return `<button type="button" class="chip" data-act="pick" data-k="form.time" data-v="${tm}" aria-pressed="${f.time === tm}"${full ? ' disabled' : ''}>${tm}<small>${esc(full ? t('slot_full') : t('slots_left', { n: left }))}</small></button>`;
    }).join('') + '</div>' : `<p class="note">${esc(t('no_slots'))}</p>`;
  }
  const dayChip = d => { const dt = parseYmd(d); return `<button type="button" class="chip" data-act="pick" data-k="form.date" data-v="${d}" aria-pressed="${f.date === d}">${esc(d === today() ? t('today') : d === addDays(today(), 1) ? t('tomorrow') : new Intl.DateTimeFormat(loc(), { weekday: 'short' }).format(dt))}<small>${esc(new Intl.DateTimeFormat(loc(), { day: 'numeric', month: 'short' }).format(dt))}</small></button>`; };
  return `<form class="view" data-form="book" novalidate>
    <div class="intro"><h1>${esc(t('book_title'))}</h1><p class="sub">${esc(t('book_sub'))}</p></div>${roBanner()}
    <section class="section"><div class="section-head"><h2>${esc(t('sec_vehicle'))}</h2><span class="num">01</span></div>${vehicleFields('form', f, false)}</section>
    <section class="section"><div class="section-head"><h2>${esc(t('sec_service'))}</h2><span class="num">02</span></div>${serviceChips('form', f)}</section>
    <section class="section"><div class="section-head"><h2>${esc(t('sec_problem'))}</h2><span class="num">03</span></div>
      <label class="sr" for="f-form-problem">${esc(t('sec_problem'))}</label><textarea class="input" id="f-form-problem" data-bind="form.problem" placeholder="${esc(t('problem_ph'))}">${esc(f.problem)}</textarea>${photoPicker('form.photo', f.photo)}</section>
    <section class="section"><div class="section-head"><h2>${esc(t('sec_when'))}</h2><span class="num">04</span></div><div class="hscroll days">${days.map(dayChip).join('')}</div>${slots}</section>
    <section class="section"><div class="section-head"><h2>${esc(t('sec_you'))}</h2><span class="num">05</span></div>${contactFields('form', f)}</section>
    ${S.err ? `<p class="err" role="alert">${esc(S.err)}</p>` : ''}
    <button class="btn primary block" type="submit"${D.readonly || S.busy ? ' disabled' : ''}>${ic('calendar')}${esc(t('submit_book'))}</button>
    <p class="note" style="text-align:center">${t('book_privacy', { p: `<a href="${esc(privacyUrl())}" target="_blank" rel="noopener">${esc(t('privacy'))}</a>` })}</p></form>`;
}
function viewBooked(j) {
  return `<div class="view"><div class="intro"><h1>${esc(t('booked_title'))}</h1><p class="sub">${esc(t('booked_sub'))}</p></div>
    <div class="keytag-wrap"><div class="keytag">${logoSrc() ? `<img class="k-logo" alt="" src="${esc(logoSrc())}">` : ''}<div class="k-lbl">${esc(t('booking_code'))}</div><div class="k-ref">${esc(j.ref)}</div><div class="k-bike">${esc(vName(j.vehicle))}</div></div></div>
    <div class="card"><dl class="dl"><dt>${esc(t('service_lbl'))}</dt><dd>${esc(svcName(j.service))}</dd><dt>${esc(t('booked_for'))}</dt><dd>${esc(fmtDay(j.date) + ' ' + j.time)}</dd>
    ${plateText(j.vehicle) ? `<dt>${esc(t('plate'))}</dt><dd>${plate(j.vehicle)}</dd>` : ''}<dt>${esc(t('name'))}</dt><dd>${esc(j.customer.name)}</dd></dl></div>
    <button class="btn primary block" data-act="trackref" data-v="${esc(j.ref)}">${ic('pin')}${esc(t('track_this'))}</button>
    <div class="grid2"><button class="btn" data-act="copybooking" data-v="${esc(j.id)}">${ic('copy')}${esc(t('copy_details'))}</button><button class="btn" data-act="newbooking">${ic('plus')}${esc(t('book_another'))}</button></div>${contactCard()}</div>`;
}
function findJobs(q) {
  if (custLive()) return S.trackJobs;
  const raw = String(q || '').trim(); if (!raw) return [];
  const up = raw.toUpperCase().replace(/\s/g, ''), dg = digits(raw);
  return Array.from(D.jobs.values()).filter(j => {
    const ref = String(j.ref || '').toUpperCase();
    if (ref === up || (dg.length === 4 && ref === 'MB-' + dg)) return true;
    return dg.length >= 9 && digits(j.customer.phone).slice(-9) === dg.slice(-9);
  }).sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))).slice(0, 10);
}
function viewTrackLive() {
  const jobs = S.trackJobs, pick = jobs.find(j => j.id === S.trackPick) || jobs[0];
  const others = jobs.filter(j => pick && j.id !== pick.id && ACTIVE.indexOf(j.status) >= 0);
  return `<div class="view"><div class="intro"><h1>${esc(t('track_title'))}</h1><p class="sub">${esc(t('track_sub2'))}</p></div>
    <form class="card" data-form="track"><div class="grid2">${inp('trackCode', S.trackCode, t('track_code'), { ph: 'MB-1234', ac: 'off' })}${inp('trackPhone', S.trackPhone, t('track_phone'), { type: 'tel', mode: 'tel', ph: '081 234 5678', ac: 'tel' })}</div>
    <button class="btn dark" type="submit">${ic('search')}${esc(t('find'))}</button></form>
    ${S.trackErr ? `<p class="err" role="alert">${esc(S.trackErr)}</p>` : ''}
    ${pick ? trackDetail(pick) : ''}
    ${others.length ? `<h2>${esc(t('your_repairs'))}</h2><div class="tags">${others.map(j => tagCard(j, { cust: true, act: 'trackpick', compact: true })).join('')}</div>` : ''}</div>`;
}
function viewTrack() {
  if (custLive()) return viewTrackLive();
  const res = S.trackDone ? findJobs(S.trackDone) : null;
  let body = '';
  if (res && !res.length) body = `<p class="err" role="alert">${esc(t('not_found', { q: S.trackDone }))}</p>`;
  else if (res && res.length === 1) body = trackDetail(res[0]);
  else if (res) {
    const pick = res.find(j => j.id === S.trackPick);
    body = pick ? `<button class="back" data-act="trackpick" data-v="">‹ ${esc(t('your_repairs'))}</button>${trackDetail(pick)}`
      : `<h2>${esc(t('your_repairs'))}</h2><div class="tags">${res.map(j => tagCard(j, { cust: true, act: 'trackpick' })).join('')}</div>`;
  }
  return `<div class="view"><div class="intro"><h1>${esc(t('track_title'))}</h1><p class="sub">${esc(t('track_sub'))}</p></div>
    <form class="row" data-form="track"><label class="sr" for="f-trackQ">${esc(t('track_title'))}</label><input class="input" style="flex:1;min-width:0" id="f-trackQ" data-bind="trackQ" value="${esc(S.trackQ)}" placeholder="${esc(t('track_ph'))}" autocomplete="off"><button class="btn dark" type="submit">${ic('search')}${esc(t('find'))}</button></form>${body}</div>`;
}
function newCount(j) {
  if (S.seenFor === j.id) return S.seenCount;
  const last = lsGet('motoapp.seen.' + j.id);
  let n = 0;
  if (last) {
    n += j.timeline.filter(e => e.at > last && e.by !== 'customer' && e.kind !== 'event').length;
    n += j.photos.filter(p => p.at > last && p.by !== 'customer').length;
    n += j.chat.filter(m => m.at > last && m.from === 'shop').length;
  }
  S.seenFor = j.id; S.seenCount = n; lsSet('motoapp.seen.' + j.id, nowIso());
  return n;
}
function trackDetail(j) {
  const nc = newCount(j), pl = proposed(j), tt = totals(j);
  let est = '';
  if (pl.length && j.estimate.status === 'sent') {
    const extra = j.lines.some(l => l.state === 'approved');
    const allAns = pl.every(l => S.est[l.id]);
    est = `<div class="card hl"><div class="section-head"><h2>${esc(extra ? t('est_extra') : t('est_title'))}</h2>${pill('approval', true)}</div><p class="sub">${esc(t('est_intro'))}</p>
      <div class="lines">${pl.map(l => `<div class="line"><span><span class="kind">${esc(t(l.kind === 'labour' ? 'labour' : 'part'))}${l.extra ? ` <span class="mini info">${esc(t('new_item'))}</span>` : ''}</span>${esc(l.desc)}${Number(l.qty) !== 1 ? ' × ' + l.qty : ''}</span><span class="amt">${baht(lineAmt(l))}</span>
        <div class="yn"><button class="btn sm y" data-act="estyn" data-k="${esc(l.id)}" data-v="y" aria-pressed="${S.est[l.id] === 'y'}">${ic('check')}${esc(t('yes'))}</button><button class="btn sm n" data-act="estyn" data-k="${esc(l.id)}" data-v="n" aria-pressed="${S.est[l.id] === 'n'}">${ic('x')}${esc(t('no'))}</button></div></div>`).join('')}</div>
      ${totalsHtml(j, calc(j, j.lines.filter(l => l.state === 'approved' || (l.state === 'proposed' && S.est[l.id] !== 'n'))))}
      <div class="grid2"><button class="btn" data-act="estall">${esc(t('approve_all'))}</button><button class="btn primary" data-act="answer" data-v="${esc(j.id)}"${allAns && !D.readonly ? '' : ' disabled'}>${esc(t('send_answer'))}</button></div>
      ${allAns ? '' : `<p class="note">${esc(t('answer_all'))}</p>`}</div>`;
  }
  const hasPP = !!D.settings.promptpay && digits(D.settings.promptpay).length >= 9;
  const pay = (j.status === 'ready' || j.status === 'completed') && tt.due > 0 ? `<div class="card hl"><h2>${esc(hasPP ? t('pay_now') : t('pay_due'))}</h2>${totalsHtml(j, tt)}${hasPP ? `${qrHtml(tt.due)}<p class="note">${esc(t('scan_pay'))}</p>` : `<p class="note">${esc(t('pay_at_shop'))}</p>`}</div>` : '';
  const showDvi = j.dvi.some(d => d.rating) && (j.dviDone || j.estimate.status !== 'none');
  const notes = j.timeline.filter(e => e.kind === 'note').slice().reverse();
  return `<div class="card"><div class="tag-top"><span class="ref">${esc(j.ref)}</span>${j.example ? '<span class="tagchip">Example</span>' : ''}${pill(j.status, true)}</div>
      <div class="tag-mid">${plate(j.vehicle)}<span class="vname"><b>${esc(vName(j.vehicle))}</b><small>${esc(svcName(j.service))}</small></span></div>
      <p class="note">${esc(j.source === 'walkin' ? t('walkin') + ' · ' + fmtDay(j.date) : t('booked_for') + ' ' + fmtDay(j.date) + ' ' + j.time)}${j.mechanic ? ' · ' + esc(t('mechanic')) + ' ' + esc(j.mechanic) : ''}</p></div>
    ${nc ? `<div class="banner">${esc(t('new_updates', { n: nc }))}</div>` : ''}
    ${est}${pay}
    <div class="card"><h3>${esc(t('progress'))}</h3>${stepperHtml(j, true)}</div>
    ${showDvi ? `<div class="card"><h3>${esc(t('inspection_report'))}</h3>${dviReport(j, false)}</div>` : ''}
    ${proofCardHtml(j)}${odoCardHtml(j, false)}
    ${j.photos.some(p => !(p.lineId && PROOF_KINDS.indexOf(p.kind) >= 0) && p.kind !== 'odo_in' && p.kind !== 'odo_out') ? `<div class="card"><h3>${esc(t('photos'))}</h3>${galleryHtml(j, { skipProof: true })}</div>` : ''}
    <div class="card"><h3>${esc(t('updates'))}</h3>${notes.length ? `<div class="feed">${notes.map(e => `<div class="post"><span class="meta">${esc(fmtWhen(e.at))}${e.by ? ' · ' + esc(e.by) : ''}</span>${e.text ? `<p>${esc(e.text)}</p>` : ''}${e.photo ? `<img class="photo-big" alt="" data-photo="${esc(e.photo)}">` : ''}</div>`).join('')}</div>` : `<p class="note">${esc(t('no_updates'))}</p>`}</div>
    <div class="card"><h3>${esc(t('chat'))}</h3>${chatHtml(j, 'customer')}</div>
    ${j.lines.some(l => l.state === 'approved') ? `<div class="card"><h3>${esc(t('invoice'))}</h3>${linesHtml(j, { filter: l => l.state === 'approved' })}${totalsHtml(j, tt)}</div>` : ''}
    <div class="card"><h3>${esc(t('history_veh'))}</h3>${historyHtml(j, true)}</div>${contactCard()}`;
}

/* ================= mechanic ================= */
const PRIO = { in_progress: 0, parts_replaced: 1, approved: 2, inspection: 3, received: 4, qc: 5, parts_wait: 6, approval: 7, ready: 8, booked: 9 };
const byPrio = (a, b) => ((PRIO[a.status] ?? 10) - (PRIO[b.status] ?? 10)) || (a.date + a.time).localeCompare(b.date + b.time);
function viewMyJobs() {
  const ms = mechanics();
  if (LIVE && AUTH.profile && AUTH.profile.role === 'mechanic') S.me = AUTH.profile.name;
  const head = LIVE && AUTH.profile && AUTH.profile.role === 'mechanic' ? `<div class="intro"><h1>${esc(t('my_jobs'))}</h1><p class="sub">${esc(S.me)}</p></div>` : `<div class="intro"><h1>${esc(t('my_jobs'))}</h1></div><div class="section"><span class="lbl">${esc(t('iam'))}</span><div class="chips">${ms.map(m => `<button class="chip" data-act="me" data-v="${esc(m)}" aria-pressed="${S.me === m}">${esc(m)}</button>`).join('')}</div></div>`;
  if (!S.me) return `<div class="view">${head}<div class="empty">${ic('user')}${esc(t('pick_me'))}</div></div>`;
  const all = jobsHere();
  const mine = all.filter(j => j.mechanic === S.me && IN_SHOP.indexOf(j.status) >= 0).sort(byPrio);
  const open = all.filter(j => !j.mechanic && ['received', 'inspection', 'approved', 'parts_wait', 'in_progress'].indexOf(j.status) >= 0).sort(byPrio);
  return `<div class="view">${head}${roBanner()}
    ${mine.length ? `<div class="tags">${mine.map(j => tagCard(j)).join('')}</div>` : `<div class="empty">${ic('wrench')}${esc(t('no_my_jobs'))}</div>`}
    ${open.length ? `<h2>${esc(t('unassigned_jobs'))}</h2><div class="tags">${open.map(j => tagCard(j) + `<button class="btn primary block" data-act="takejob" data-v="${esc(j.id)}">${ic('wrench')}${esc(t('take_job'))}</button>`).join('')}</div>` : ''}</div>`;
}

/* ================= job ================= */
function viewJob() {
  const j = D.jobs.get(S.id);
  const back = S.role === 'mechanic' ? 'myjobs' : 'board';
  if (!j) return `<div class="view"><button class="back" data-act="go" data-v="${back}">‹ ${esc(t('back'))}</button><div class="empty">${esc(D.sync === 'connecting' ? t('sync_connecting') : t('no_data'))}</div></div>`;
  const tabs = S.role === 'mechanic' ? ['work', 'inspect', 'parts', 'photos', 'history'] : ['overview', 'inspect', 'parts', 'photos', 'chat', 'pay', 'history'];
  const tab = tabs.indexOf(S.tab) >= 0 ? S.tab : tabs[0];
  const isRO = j.lines.some(l => l.state === 'approved');
  const TB = { work: tabWork, overview: tabOverview, inspect: tabInspect, parts: tabParts, photos: tabPhotos, chat: tabChat, pay: tabPay, history: j2 => `<div class="card"><h3>${esc(t('history_veh'))}</h3>${historyHtml(j2, false)}</div>` };
  return `<div class="view"><button class="back" data-act="go" data-v="${back}">‹ ${esc(t(back === 'myjobs' ? 'my_jobs' : 'all_jobs'))}</button>${roBanner()}
    <div class="card"><div class="tag-top"><span class="ref">${esc(j.ref)}</span><span class="mini">${esc(isRO ? t('doc_ro') : t('doc_estimate'))}</span>${j.example ? '<span class="tagchip">Example</span>' : ''}${pill(j.status)}</div>
      <div class="tag-mid">${plate(j.vehicle)}<span class="vname"><b>${esc(vName(j.vehicle))}${j.vehicle.year ? ' · ' + esc(j.vehicle.year) : ''}</b><small>${esc(svcName(j.service))} · ${esc(j.customer.name)}${j.mechanic ? ' · ' + esc(j.mechanic) : ''}</small></span></div></div>
    <div class="tabs" role="tablist">${tabs.map(x => `<button role="tab" data-act="tab" data-v="${x}" aria-selected="${tab === x}">${ic(TAB_IC[x])}${esc(t('tab_' + x))}${x === 'chat' && unreadChat(j) ? '<span class="badge">!</span>' : ''}</button>`).join('')}</div>
    ${TB[tab](j)}</div>`;
}
function primaryAction(j) {
  const desk = can('checkin'), s = j.status;
  if (s === 'booked') return desk ? { a: 'status', v: 'received', l: t('act_checkin') } : null;
  if (s === 'received') return { a: 'status', v: 'inspection', l: t('act_start_insp') };
  if (s === 'inspection') {
    if (!j.dviDone) return { a: 'dvidone', l: t('act_insp_done') };
    if (desk && proposed(j).length && j.estimate.status !== 'sent' && j.estimate.status !== 'owner') return { a: 'sendest', l: t('send_est') };
    return { info: t('insp_done_wait') };
  }
  if (s === 'approval') return { info: j.estimate.status === 'owner' ? t('big_job_pending', { a: baht(D.settings.bigJob) }) : t('wait_customer') };
  if (s === 'approved' || s === 'parts_wait') return { a: 'status', v: 'in_progress', l: t('act_start_repair'), alt: s === 'approved' ? { a: 'status', v: 'parts_wait', l: t('act_wait_parts') } : null };
  if (s === 'in_progress') return { a: 'toqc', l: t('act_to_qc') };
  if (s === 'parts_replaced') return { a: 'status', v: 'qc', l: t('act_parts_done') };
  if (s === 'qc') return { a: 'status', v: 'ready', l: t('act_qc_pass') };
  if (s === 'ready') return desk ? { a: 'complete', l: t('act_complete') } : { info: t('ready_wait') };
  return null;
}
function actionHtml(j) {
  const p = primaryAction(j);
  if (!p) return '';
  if (p.info) return `<div class="banner">${esc(p.info)}</div>`;
  const icn = p.a === 'status' ? ST_IC[p.v] : ({ dvidone: 'checkc', sendest: 'send', toqc: 'shield', complete: 'done' })[p.a] || 'check';
  return `<button class="btn primary block" data-act="${p.a}" data-v="${p.v || ''}">${ic(icn)}${esc(p.l)}</button>${p.alt ? `<button class="btn block" data-act="${p.alt.a}" data-v="${p.alt.v}">${ic(ST_IC[p.alt.v])}${esc(p.alt.l)}</button>` : ''}`;
}
function timerHtml(j) {
  const me = S.role === 'mechanic' ? S.me : '';
  if (!me) return '';
  const since = j.timers && j.timers[me], base = loggedMs(j, me);
  return `<div class="card"><h3>${esc(t('timer'))}</h3><div class="row" style="justify-content:space-between"><span class="timer" ${since ? `data-since="${esc(since)}" data-base="${base}"` : ''}>${clock(base + (since ? Date.now() - new Date(since).getTime() : 0))}</span>
    <button class="btn ${since ? 'danger' : 'ok'}" style="min-width:130px" data-act="timer">${ic(since ? 'stop' : 'play')}${esc(since ? t('stop') : t('start'))}</button></div></div>`;
}
function tasksHtml(j) {
  return `<div class="card"><h3>${esc(t('tasks'))}</h3>${j.tasks.map(x => `<label class="task${x.done ? ' done' : ''}" for="task-${esc(x.id)}"><input type="checkbox" id="task-${esc(x.id)}" data-task="${esc(x.id)}"${x.done ? ' checked' : ''}><span>${esc(x.text)}</span></label>`).join('')}
    <form class="row" data-form="task"><label class="sr" for="f-taskText">${esc(t('tasks'))}</label><input class="input" style="flex:1;min-width:0" id="f-taskText" data-bind="taskText" value="${esc(S.taskText)}" placeholder="${esc(t('task_ph'))}"><button class="btn dark sm" type="submit">${esc(t('add_task'))}</button></form></div>`;
}
function noteFormHtml() {
  return `<form class="card" data-form="note"><h3>${esc(t('updates'))}</h3><label class="sr" for="f-note">${esc(t('updates'))}</label><textarea class="input" id="f-note" data-bind="note" placeholder="${esc(t('update_ph'))}">${esc(S.note)}</textarea>${photoPicker('notePhoto', S.notePhoto)}<button class="btn dark" type="submit">${esc(t('send'))}</button></form>`;
}
function tabWork(j) {
  const cp = j.photos.find(p => p.kind === 'customer');
  return `<div class="card">${actionHtml(j)}</div>${timerHtml(j)}
    ${j.problem || cp ? `<div class="card"><h3>${esc(t('problem'))}</h3>${j.problem ? `<p>${esc(j.problem)}</p>` : ''}${cp ? `<img class="photo-big" alt="" data-photo="${esc(cp.id)}">` : ''}</div>` : ''}
    ${odoCardHtml(j, can('photos'))}${tasksHtml(j)}${noteFormHtml()}`;
}
function tabOverview(j) {
  const c = j.customer, v = j.vehicle, cp = j.photos.find(p => p.kind === 'customer');
  const banners = [];
  if (j.discount.status === 'pending') banners.push(`<div class="banner warn">${esc(t('disc_pending', { p: j.discount.pct }))}</div>`);
  if (j.estimate.status === 'owner') banners.push(`<div class="banner warn">${esc(t('big_job_pending', { a: baht(D.settings.bigJob) }))}</div>`);
  if (j.lines.some(l => l.stock === 'needed' && l.state === 'approved')) banners.push(`<div class="banner bad">${esc(t('att_parts'))}: ${esc(j.lines.filter(l => l.stock === 'needed' && l.state === 'approved').map(l => l.desc).join(', '))}</div>`);
  const ms = mechanics(), logs = {};
  j.timeLogs.forEach(l => { logs[l.mech] = (logs[l.mech] || 0) + (new Date(l.end) - new Date(l.start)); });
  return `<div class="cols">${banners.length ? `<div class="span">${banners.join('')}</div>` : ''}
    <div class="card">${actionHtml(j)}
      ${can('status_any') ? `<div class="field"><label for="f-status">${esc(t('progress'))}</label><select class="input" id="f-status" data-act="setstatus">${STAGES.concat(['cancelled']).map(s => `<option value="${s}"${s === j.status ? ' selected' : ''}>${esc(t('st_' + s))}</option>`).join('')}</select></div>` : ''}
      <span class="lbl">${esc(t('mechanic'))}</span><div class="chips">${ms.map(m => `<button class="chip sm" data-act="assign" data-v="${esc(m)}" aria-pressed="${j.mechanic === m}">${esc(m)}</button>`).join('')}<button class="chip sm" data-act="assign" data-v="" aria-pressed="${!j.mechanic}">${esc(t('unassigned'))}</button></div>
      ${Object.keys(logs).length || Object.keys(j.timers || {}).length ? `<p class="note">${Object.keys(logs).map(m => esc(m) + ' ' + esc(t('time_h', { h: hrs(logs[m]) }))).join(' · ')}${Object.keys(j.timers || {}).map(m => ' · ' + esc(m) + ' ' + esc(t('running'))).join('')}</p>` : ''}</div>
    <div class="card"><dl class="dl"><dt>${esc(t('customer'))}</dt><dd>${esc(c.name)}</dd>${c.phone ? `<dt>${esc(t('phone'))}</dt><dd><a class="tel" href="tel:${esc(digits(c.phone))}">${esc(c.phone)}</a></dd>` : ''}${c.line ? `<dt>LINE</dt><dd>${esc(c.line)}</dd>` : ''}
      <dt>${esc(t('vtype'))}</dt><dd>${esc(t(v.type === 'car' ? 'vt_car' : 'vt_bike'))}</dd>${plateText(v) ? `<dt>${esc(t('plate'))}</dt><dd>${esc(plateText(v))}</dd>` : ''}${v.vin ? `<dt>VIN</dt><dd>${esc(v.vin)}</dd>` : ''}${v.mileage ? `<dt>${esc(t('mileage'))}</dt><dd>${esc(Number(v.mileage).toLocaleString('en-US'))}</dd>` : ''}
      <dt>${esc(t('booked_for'))}</dt><dd>${esc(j.source === 'walkin' ? t('walkin') + ' · ' + fmtDay(j.date) + ' ' + j.time : fmtDay(j.date) + ' ' + j.time)}</dd></dl>
      ${j.problem ? `<span class="lbl">${esc(t('problem'))}</span><p>${esc(j.problem)}</p>` : ''}${cp ? `<img class="photo-big" alt="" data-photo="${esc(cp.id)}">` : ''}</div>
    ${odoCardHtml(j, can('photos') || can('checkin'))}${tasksHtml(j)}${noteFormHtml()}
    <div class="card span"><h3>${esc(t('progress'))}</h3><div class="feed">${j.timeline.slice().reverse().map(e => {
      const txt = e.kind === 'status' ? stLabel(e.status) : e.kind === 'event' ? evText(e) : e.text;
      return `<div class="post${e.kind !== 'note' ? ' ev' : ''}"><span class="meta">${esc(fmtWhen(e.at))}${e.by ? ' · ' + esc(e.by === 'customer' ? t('by_customer') : e.by) : ''}</span>${txt ? `<p>${esc(txt)}</p>` : ''}${e.photo ? `<img class="photo-big" alt="" data-photo="${esc(e.photo)}">` : ''}</div>`;
    }).join('')}</div></div>
    ${can('delete') ? `<button class="btn danger block span" data-act="askdelete">${ic('trash')}${esc(t('delete_job'))}</button>` : ''}</div>`;
}
function evText(e) {
  if (e.event === 'est_sent') return t('ev_est_sent', { a: baht(e.amount) });
  if (e.event === 'est_answer') return t('ev_est_answer', { y: e.y, n: e.n });
  if (e.event === 'converted') return t('ev_converted');
  if (e.event === 'fitted') return t('ev_fitted', { p: e.part });
  if (e.event === 'dvi_done') return t('ev_dvi_done');
  if (e.event === 'paid') return t('ev_paid', { a: baht(e.amount), m: t('pm_' + e.method) });
  if (e.event === 'needed') return t('ev_needed', { p: e.part });
  if (e.event === 'big_ok') return t('ev_big_ok');
  if (e.event === 'disc') return t('ev_disc', { p: e.pct, s: e.s });
  if (e.event === 'odo_in' || e.event === 'odo_out') return t('ev_' + e.event, { km: Number(e.km).toLocaleString('en-US') });
  if (e.event === 'old_given') return t('ev_old_given');
  return e.event || '';
}
function tabInspect(j) {
  const edit = can('dvi') && ['received', 'inspection', 'approval', 'approved', 'in_progress', 'parts_wait'].indexOf(j.status) >= 0;
  if (!j.dvi.length) return `<div class="card"><p class="note">${esc(t('dvi_start'))}</p>${can('dvi') && (j.status === 'received' || j.status === 'booked') ? `<button class="btn primary block" data-act="status" data-v="inspection">${esc(t('act_start_insp'))}</button>` : ''}</div>`;
  return `<div class="card"><h3>${esc(t('inspection_report'))}</h3>${dviReport(j, edit)}
    ${edit ? `<button class="btn dark" data-act="savenotes">${esc(t('save_notes'))}</button>` : ''}
    ${edit && j.status === 'inspection' && !j.dviDone ? `<button class="btn primary block" data-act="dvidone">${esc(t('act_insp_done'))}</button>` : ''}</div>`;
}
function stockResults(q) {
  q = String(q || '').trim().toLowerCase();
  if (!q) return '';
  const ps = partsHere().filter(p => [p.name, p.sku, p.barcode].some(x => String(x || '').toLowerCase().indexOf(q) >= 0)).slice(0, 8);
  if (!ps.length) return `<p class="note">${esc(t('no_parts'))}</p>`;
  return ps.map(p => `<button type="button" class="result" data-act="addpartline" data-v="${esc(p.id)}"><span><b>${esc(p.name)}</b><br><small class="note">${esc(p.sku)} · ${esc(avail(p) > 0 ? t('in_stock', { n: avail(p) }) : t('out_of_stock'))}</small></span>${S.role !== 'mechanic' ? `<span class="amt">${baht(p.price)}</span>` : ''}</button>`).join('');
}
function tabParts(j) {
  const L = S.line, isRO = j.lines.some(l => l.state === 'approved'), et = estTotals(j), pl = proposed(j);
  let estBlock = '';
  if (can('estimate')) {
    const parts = [];
    if (j.estimate.status === 'owner') parts.push(`<div class="banner warn">${esc(t('big_job_pending', { a: baht(D.settings.bigJob) }))}</div>`);
    else if (pl.length && j.estimate.status === 'sent') parts.push(`<div class="banner">${esc(t('est_sent'))}</div>`);
    if (pl.length && j.estimate.status !== 'sent' && j.estimate.status !== 'owner') parts.push(`<button class="btn primary block" data-act="sendest">${ic('send')}${esc(isRO ? t('send_extra') : t('send_est'))}</button>`);
    if (pl.length) parts.push(`<button class="btn block" data-act="convert">${ic('phone')}${esc(t('convert'))}</button>`);
    const d = j.discount;
    parts.push(`<form class="row" data-form="disc"><div class="field" style="flex:1"><label for="f-discPct">${esc(t('disc_pct'))}</label><input class="input" id="f-discPct" inputmode="decimal" data-bind="discPct" value="${esc(S.discPct !== '' ? S.discPct : (d.pct || ''))}"></div><button class="btn" type="submit" style="align-self:end">${esc(t('apply'))}</button></form>`);
    if (d.status === 'pending') parts.push(`<p class="note">${esc(t('disc_pending', { p: d.pct }))}</p>`);
    if (d.status === 'applied' || d.status === 'approved') parts.push(`<p class="note">${esc(t('disc_applied', { p: d.pct }))}</p>`);
    if (d.status === 'rejected') parts.push(`<p class="err">${esc(t('disc_rejected', { p: d.pct }))}</p>`);
    estBlock = `<div class="card">${S.role !== 'mechanic' ? `<div class="section-head"><h3>${esc(t('est_total'))}</h3><b>${baht(et.total)}</b></div>` : ''}${parts.join('')}</div>`;
  }
  const add = can('parts_use') && j.status !== 'completed' && j.status !== 'cancelled' ? `<div class="card"><h3>${esc(t('add_from_stock'))}</h3>
      <form data-form="lsearch" class="row"><label class="sr" for="f-lineQ">${esc(t('search_stock_ph'))}</label><input class="input" style="flex:1;min-width:0" id="f-lineQ" data-bind="lineQ" value="${esc(S.lineQ)}" placeholder="${esc(t('search_stock_ph'))}" autocomplete="off"></form>
      <div class="results" id="res-lineQ">${stockResults(S.lineQ)}</div>
      <form class="addbox" data-form="line"><div class="seg" role="group"><button type="button" data-act="linekind" data-v="labour" aria-pressed="${L.kind === 'labour'}">${esc(t('add_labour'))}</button><button type="button" data-act="linekind" data-v="part" aria-pressed="${L.kind === 'part'}">${esc(t('custom_part'))}</button></div>
        ${inp('line.desc', L.desc, t('desc'))}<div class="grid2">${inp('line.qty', L.qty, L.kind === 'labour' ? t('hours') : t('qty'), { mode: 'decimal' })}${S.role !== 'mechanic' ? inp('line.price', L.price, t('price'), { mode: 'decimal', ph: L.kind === 'labour' ? String(D.settings.labourRate) : '' }) : `<p class="note" style="align-self:end">${esc(t('price_later'))}</p>`}</div>
        <button class="btn dark" type="submit">${ic('plus')}${esc(t('add_line'))}</button>${isRO ? `<p class="note">${esc(t('extra_note'))}</p>` : ''}</form></div>` : '';
  return `<div class="cols"><div class="card"><div class="section-head"><h2>${esc(isRO ? t('doc_ro') : t('doc_estimate'))}</h2><span class="num">${esc(j.ref)}</span></div>
    ${linesHtml(j, { edit: true, states: true, stock: true })}${S.role !== 'mechanic' && j.lines.length ? totalsHtml(j, et) : ''}</div>${estBlock}${add}</div>`;
}
function tabPhotos(j) {
  return `<div class="card"><h3>${esc(t('photos'))}</h3>${galleryHtml(j)}${can('photos') ? photoPicker('gen', null, t('add_photo')) : ''}</div>`;
}
function tabChat(j) { return `<div class="card"><h3>${esc(t('chat'))}</h3>${chatHtml(j, 'shop')}</div>`; }
function tabPay(j) {
  const tt = totals(j), P = S.pay, amt = P.amount !== '' ? num(P.amount) : tt.due;
  return `<div class="cols"><div>${receiptHtml(j)}</div><div class="card">
    ${can('pay') && tt.due > 0 ? `<h2>${esc(t('take_payment'))}</h2><div class="chips">${PAY.map(m => `<button class="chip sm" data-act="paymethod" data-v="${m}" aria-pressed="${P.method === m}">${esc(t('pm_' + m))}</button>`).join('')}</div>
      <form class="section" data-form="pay">${inp('pay.amount', P.amount !== '' ? P.amount : tt.due, t('amount'), { mode: 'decimal' })}${P.method === 'promptpay' && amt > 0 ? qrHtml(amt) : ''}<button class="btn primary" type="submit">${ic('cash')}${esc(t('record'))}</button></form>` : ''}
    ${j.payments.length ? `<h3>${esc(t('payments'))}</h3><div class="tbl-wrap"><table class="tbl"><tbody>${j.payments.map(p => `<tr><td>${esc(fmtWhen(p.at))}</td><td>${esc(t('pm_' + p.method))}</td><td class="r">${baht(p.amount)}</td></tr>`).join('')}</tbody></table></div>` : ''}
    <div class="grid2"><button class="btn" data-act="copyinvoice">${ic('receipt')}${esc(t('copy_invoice'))}</button><button class="btn" data-act="copymsg">${ic('copy')}${esc(t('copy_msg'))}</button></div>
    ${oldToGive(j).length && can('checkin') ? `<div class="banner warn">${esc(t('old_to_give'))}: ${esc(oldToGive(j).map(l => l.desc).join(', '))}</div><button class="btn block" data-act="oldgiven">${ic('check')}${esc(t('mark_given'))}</button>` : ''}
    ${j.status === 'ready' && j.odo && j.odo.in && !j.odo.out && can('checkin') ? `<div class="banner warn">${esc(t('odo_out_first'))}</div><button class="btn block" data-act="odo" data-v="out">${ic('camera')}${esc(t('odo_record_out'))}</button>` : ''}
    ${j.status === 'ready' && can('checkin') ? `<button class="btn dark block" data-act="complete">${ic('done')}${esc(t('act_complete'))}</button>` : ''}</div></div>`;
}

/* ================= desk ================= */
function attentionList() {
  const out = [];
  jobsHere().forEach(j => {
    if (ACTIVE.indexOf(j.status) < 0) return;
    if (unreadChat(j)) out.push({ j: j, k: 'att_chat', tab: 'chat' });
    if (j.status === 'inspection' && j.dviDone && j.estimate.status !== 'sent' && j.estimate.status !== 'owner') out.push({ j: j, k: 'att_dvi', tab: 'parts' });
    if (j.status === 'approval' && j.estimate.status === 'answered') out.push({ j: j, k: 'att_answered', tab: 'parts' });
    if (j.lines.some(l => l.stock === 'needed' && l.state === 'approved')) out.push({ j: j, k: 'att_parts', tab: 'parts' });
    if (proposed(j).length && j.lines.some(l => l.state === 'approved') && ['sent', 'owner'].indexOf(j.estimate.status) < 0) out.push({ j: j, k: 'att_extra', tab: 'parts' });
  });
  return out;
}
function attentionHtml() {
  const a = attentionList();
  return `<div class="card"><h3>${esc(t('attention'))}</h3>${a.length ? a.map(x => `<button class="result" data-act="openjob" data-v="${esc(x.j.id)}" data-tab="${x.tab}"><span><b class="ref">${esc(x.j.ref)}</b> ${esc(vName(x.j.vehicle))}<br><small class="note">${esc(t(x.k))}</small></span>${pill(x.j.status)}</button>`).join('') : `<p class="note">${esc(t('nothing'))}</p>`}</div>`;
}
function viewToday() {
  const day = S.apptDay || today(), all = jobsHere();
  const appts = all.filter(j => j.status === 'booked' && j.date === day).sort((a, b) => a.time.localeCompare(b.time));
  const ready = all.filter(j => j.status === 'ready');
  const days = []; for (let i = 0; i < 7; i++) days.push(addDays(today(), i));
  const inShop = all.filter(j => IN_SHOP.indexOf(j.status) >= 0).length;
  return `<div class="view"><div class="intro"><h1>${esc(t('nav_today'))}</h1><p class="sub">${esc(fmtLong(today()))} · ${esc(t('in_shop_now', { n: inShop }))}</p></div>${roBanner()}
    <div class="cols">${attentionHtml()}
    <div class="card"><h3>${esc(t('ready_pickup'))}</h3>${ready.length ? ready.map(j => { const tt = totals(j); return tagCard(j, { compact: true }) + (tt.due > 0 ? `<p class="note">${esc(t('due_amt', { a: baht(tt.due) }))}</p>` : ''); }).join('') : `<p class="note">${esc(t('nothing'))}</p>`}</div>
    <div class="card span"><div class="section-head"><h3>${esc(t('appointments'))}</h3></div><div class="hscroll">${days.map(d => `<button class="chip sm" data-act="apptday" data-v="${d}" aria-pressed="${d === day}">${esc(fmtDay(d))}</button>`).join('')}</div>
      ${appts.length ? `<div class="tags grid">${appts.map(j => `<div class="section">${tagCard(j)}<button class="btn primary" data-act="checkin" data-v="${esc(j.id)}">${ic('key')}${esc(t('act_checkin'))}</button></div>`).join('')}</div>` : `<p class="note">${esc(t('no_appts'))}</p>`}</div></div></div>`;
}
function matchJob(j, q) {
  q = q.trim().toLowerCase(); if (!q) return true;
  const dq = digits(q), v = j.vehicle;
  return [j.ref, j.customer.name, plateText(v), (v.series || '') + (v.number || ''), v.vin, vName(v)].some(x => String(x || '').toLowerCase().replace(/\s/g, '').indexOf(q.replace(/\s/g, '')) >= 0) ||
    (dq.length >= 4 && digits(j.customer.phone).indexOf(dq) >= 0);
}
function boardBody() {
  const q = S.q.trim();
  const list = jobsHere().filter(j => q ? matchJob(j, q) : ACTIVE.indexOf(j.status) >= 0);
  if (S.boardMode === 'board' && !q) {
    return `<div class="kanban">${COLUMNS.map(c => {
      const js = list.filter(j => c.s.indexOf(j.status) >= 0).sort(byPrio);
      return `<div class="kcol"><div class="kcol-head st-${c.c}"><span style="display:flex;align-items:center;font:inherit;color:inherit">${ic(ST_IC[c.s[0]])}${esc(t(c.k))}</span><span>${js.length}</span></div>${js.length ? js.map(j => tagCard(j, { compact: true })).join('') : '<div class="empty">—</div>'}</div>`;
    }).join('')}</div>`;
  }
  list.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return list.length ? `<div class="tags grid">${list.map(j => tagCard(j)).join('')}</div>` : `<div class="empty">${ic('board')}${esc(t('no_data'))}</div>`;
}
function viewBoard() {
  return `<div class="view"><div class="section-head"><h1>${esc(t('nav_board'))}</h1><button class="btn primary sm" data-act="go" data-v="newjob">${ic('plus')}${esc(t('newjob_title'))}</button></div>${roBanner()}
    <div class="row"><form data-form="noop" style="flex:1;min-width:200px"><label class="sr" for="f-q">${esc(t('search_ph'))}</label><input class="input" id="f-q" data-bind="q" value="${esc(S.q)}" placeholder="${esc(t('search_ph'))}" autocomplete="off"></form>
    <div class="seg" role="group"><button data-act="boardmode" data-v="board" aria-pressed="${S.boardMode === 'board'}">${esc(t('board'))}</button><button data-act="boardmode" data-v="list" aria-pressed="${S.boardMode === 'list'}">${esc(t('list'))}</button></div></div>
    <div id="board-body">${boardBody()}</div></div>`;
}
function viewNewJob() {
  const f = S.walk, ms = mechanics();
  return `<form class="view" data-form="newjob" novalidate><div class="intro"><h1>${esc(t('newjob_title'))}</h1></div>${roBanner()}
    <div class="seg" role="group"><button type="button" data-act="pick" data-k="walk.now" data-v="1" aria-pressed="${!!f.now}">${esc(t('here_now'))}</button><button type="button" data-act="pick" data-k="walk.now" data-v="" aria-pressed="${!f.now}">${esc(t('book_later'))}</button></div>
    ${f.now ? '' : `<div class="grid2">${inp('walk.date', f.date, t('date'), { type: 'date' })}${inp('walk.time', f.time, t('time'), { type: 'time' })}</div>`}
    <div class="cols"><section class="card">${vehicleFields('walk', f, true)}</section>
    <div class="section"><section class="card"><h2>${esc(t('sec_service'))}</h2>${serviceChips('walk', f)}</section>
    <section class="card"><h2>${esc(t('problem'))}</h2><label class="sr" for="f-walk-problem">${esc(t('problem'))}</label><textarea class="input" id="f-walk-problem" data-bind="walk.problem" placeholder="${esc(t('problem_ph'))}">${esc(f.problem)}</textarea>${photoPicker('walk.photo', f.photo)}</section>
    <section class="card"><h2>${esc(t('customer'))}</h2>${contactFields('walk', f)}</section>
    <section class="card"><h2>${esc(t('mechanic'))}</h2><div class="chips">${ms.map(m => `<button type="button" class="chip sm" data-act="pick" data-k="walk.mechanic" data-v="${esc(m)}" aria-pressed="${f.mechanic === m}">${esc(m)}</button>`).join('')}</div></section></div></div>
    ${S.err ? `<p class="err" role="alert">${esc(S.err)}</p>` : ''}<button class="btn primary block" type="submit"${D.readonly ? ' disabled' : ''}>${ic('plus')}${esc(t('create_job'))}</button></form>`;
}

/* ================= stock ================= */
function neededQty(pid) { let n = 0; D.jobs.forEach(j => j.lines.forEach(l => { if (l.partId === pid && l.stock === 'needed' && l.state === 'approved') n += Number(l.qty) || 0; })); return n; }
function suggestQty(p) { const short = Math.max(0, neededQty(p.id) - Math.max(0, avail(p))); return (isLow(p) ? (Number(p.reorderQty) || 1) : 0) + short; }
function stockList() {
  const q = S.stockQ.trim().toLowerCase(), f = S.stockF;
  return partsHere().filter(p => {
    if (q && ![p.name, p.sku, p.barcode, p.shelf, p.supplier].some(x => String(x || '').toLowerCase().indexOf(q) >= 0)) return false;
    if (f === 'low') return isLow(p);
    if (f === 'needed') return neededQty(p.id) > 0;
    if (f === 'bike' || f === 'car') return p.fits === f || p.fits === 'both';
    return true;
  }).sort((a, b) => (isLow(b) - isLow(a)) || a.name.localeCompare(b.name));
}
function stockBody() {
  const ps = stockList();
  if (!ps.length) return `<div class="empty">${ic('box')}${esc(t('no_parts'))}</div>`;
  return `<div class="tags grid">${ps.map(p => `<button class="stockrow" data-act="openpart" data-v="${esc(p.id)}"><span><b>${esc(p.name)}</b> ${isLow(p) ? `<span class="mini bad">${esc(t('low'))}</span>` : ''}${neededQty(p.id) ? ` <span class="mini warn">${esc(t('s_needed'))} ${neededQty(p.id)}</span>` : ''}<br>
    <small>${esc(p.sku)} · ${esc(t('shelf'))} ${esc(p.shelf || '—')} · ${esc(t('cat_' + p.category))}${S.role !== 'mechanic' ? ' · ' + baht(p.price) : ''}${can('cost') ? ' · ' + esc(t('margin')) + ' ' + marginPct(p) + '%' : ''}</small></span>
    <span class="q">${avail(p)}<br><small>${esc(t('on_hand'))} ${p.onHand}${p.reserved ? ' · ' + esc(t('reserved')) + ' ' + p.reserved : ''}</small></span></button>`).join('')}</div>`;
}
const marginPct = p => Number(p.price) > 0 ? Math.round((Number(p.price) - Number(p.cost)) / Number(p.price) * 100) : 0;
function reorderCard() {
  const ps = partsHere().filter(p => suggestQty(p) > 0);
  const custom = []; jobsHere().forEach(j => j.lines.forEach(l => { if (!l.partId && l.kind === 'part' && l.stock === 'needed' && l.state === 'approved') custom.push({ l: l, j: j }); }));
  if (!ps.length && !custom.length) return '';
  return `<div class="card hl"><div class="section-head"><h3>${esc(t('reorder_title'))}</h3><button class="btn sm" data-act="copyorder">${ic('copy', 'sm')}${esc(t('copy_order'))}</button></div>
    <div class="tbl-wrap"><table class="tbl"><tbody>${ps.map(p => `<tr><td>${esc(p.name)}<br><small class="note">${esc(p.supplier || '')}</small></td><td class="r">${esc(t('available'))} ${avail(p)}</td><td class="r"><b>${esc(t('suggest', { q: suggestQty(p) }))}</b></td></tr>`).join('')}
    ${custom.map(c => `<tr><td>${esc(c.l.desc)}<br><small class="note">${esc(c.j.ref)}</small></td><td class="r">—</td><td class="r"><b>${esc(t('suggest', { q: c.l.qty }))}</b></td></tr>`).join('')}</tbody></table></div></div>`;
}
function viewStock() {
  return `<div class="view"><div class="section-head"><h1>${esc(t('stock_title'))}</h1>${can('stock_edit') ? `<button class="btn primary sm" data-act="openpart" data-v="new">${ic('plus')}${esc(t('add_part'))}</button>` : ''}</div>${roBanner()}
    <form data-form="ssearch"><label class="sr" for="f-stockQ">${esc(t('search_stock_ph'))}</label><input class="input" id="f-stockQ" data-bind="stockQ" value="${esc(S.stockQ)}" placeholder="${esc(t('search_stock_ph'))}" autocomplete="off"></form>
    <p class="note">${esc(t('scan_hint'))}</p>
    <div class="hscroll">${['all', 'low', 'needed', 'bike', 'car'].map(f => `<button class="chip sm" data-act="stockf" data-v="${f}" aria-pressed="${S.stockF === f}">${esc(f === 'bike' ? t('vt_bike') : f === 'car' ? t('vt_car') : t('f_' + f))}</button>`).join('')}</div>
    ${S.role !== 'mechanic' ? reorderCard() : ''}<div id="stock-body">${stockBody()}</div></div>`;
}
function blankPart() { return { id: '', sku: '', barcode: '', name: '', brand: '', ptype: '', category: 'other', fits: 'both', cost: '', price: '', onHand: 0, reserved: 0, reorderLevel: 2, reorderQty: 5, shelf: '', supplier: '', loc: curBranch() }; }
function viewPart() {
  const isNew = S.id === 'new', p = isNew ? null : D.parts.get(S.id);
  if (!isNew && !p) return `<div class="view"><button class="back" data-act="go" data-v="stock">‹ ${esc(t('stock_title'))}</button><div class="empty">${esc(t('no_parts'))}</div></div>`;
  if (!S.partDraft) S.partDraft = isNew ? blankPart() : clone(p);
  const P = S.partDraft, edit = can('stock_edit');
  const form = edit ? `<form class="card" data-form="part"><h2>${esc(isNew ? t('new_part') : t('save'))}</h2>
      ${inp('partDraft.name', P.name, t('part_name'))}<div class="grid2">${inp('partDraft.sku', P.sku, t('sku'))}${inp('partDraft.barcode', P.barcode, t('barcode'))}</div>
      <div class="grid2">${inp('partDraft.brand', P.brand || '', t('part_brand'))}<div class="field"><label for="f-pptype">${esc(t('ptype'))}</label><select class="input" id="f-pptype" data-bind="partDraft.ptype"><option value=""${!P.ptype ? ' selected' : ''}>—</option>${['genuine', 'aftermarket', 'used'].map(k => `<option value="${k}"${P.ptype === k ? ' selected' : ''}>${esc(t('pt_' + k))}</option>`).join('')}</select></div></div>
      <div class="grid2"><div class="field"><label for="f-pcat">${esc(t('category'))}</label><select class="input" id="f-pcat" data-bind="partDraft.category">${PART_CATS.map(c => `<option value="${c}"${P.category === c ? ' selected' : ''}>${esc(t('cat_' + c))}</option>`).join('')}</select></div>
      <div class="field"><label for="f-pfits">${esc(t('fits'))}</label><select class="input" id="f-pfits" data-bind="partDraft.fits">${['bike', 'car', 'both'].map(c => `<option value="${c}"${P.fits === c ? ' selected' : ''}>${esc(c === 'both' ? t('fits_both') : t('vt_' + c))}</option>`).join('')}</select></div></div>
      <div class="grid2">${can('cost') ? inp('partDraft.cost', P.cost, t('cost'), { mode: 'decimal' }) : ''}${inp('partDraft.price', P.price, t('sell'), { mode: 'decimal' })}</div>
      <div class="grid2">${inp('partDraft.reorderLevel', P.reorderLevel, t('reorder_at'), { mode: 'numeric' })}${inp('partDraft.reorderQty', P.reorderQty, t('reorder_qty'), { mode: 'numeric' })}</div>
      <div class="grid2">${inp('partDraft.shelf', P.shelf, t('shelf'))}${inp('partDraft.supplier', P.supplier, t('supplier'))}</div>
      ${isNew ? inp('partDraft.onHand', P.onHand, t('on_hand'), { mode: 'numeric' }) : ''}<button class="btn primary" type="submit">${esc(t('save'))}</button></form>` : '';
  if (isNew) return `<div class="view"><button class="back" data-act="go" data-v="stock">‹ ${esc(t('stock_title'))}</button>${form}</div>`;
  const moves = Array.from(D.moves.values()).filter(m => m.partId === p.id).sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const resv = []; D.jobs.forEach(j => j.lines.forEach(l => { if (l.partId === p.id && (l.stock === 'reserved' || l.stock === 'needed')) resv.push({ j: j, l: l }); }));
  return `<div class="view"><button class="back" data-act="go" data-v="stock">‹ ${esc(t('stock_title'))}</button>
    <div class="card"><div class="section-head"><h1 style="font-size:24px">${esc(p.name)}</h1>${isLow(p) ? `<span class="mini bad">${esc(t('low'))}</span>` : ''}</div>
      <div class="kpis k4"><div class="kpi st-ready"><b>${avail(p)}</b><span>${esc(t('available'))}</span></div><div class="kpi"><b>${p.onHand}</b><span>${esc(t('on_hand'))}</span></div><div class="kpi st-booked"><b>${p.reserved || 0}</b><span>${esc(t('reserved'))}</span></div><div class="kpi st-parts_wait"><b>${p.reorderLevel}</b><span>${esc(t('reorder_at'))}</span></div></div>
      <dl class="dl"><dt>${esc(t('sku'))}</dt><dd>${esc(p.sku)}</dd>${p.brand ? `<dt>${esc(t('part_brand'))}</dt><dd>${esc(p.brand)}</dd>` : ''}${p.ptype ? `<dt>${esc(t('ptype'))}</dt><dd>${esc(t('pt_' + p.ptype))}</dd>` : ''}${p.barcode ? `<dt>${esc(t('barcode'))}</dt><dd>${esc(p.barcode)}</dd>` : ''}<dt>${esc(t('shelf'))}</dt><dd>${esc(p.shelf || '—')}</dd><dt>${esc(t('fits'))}</dt><dd>${esc(p.fits === 'both' ? t('fits_both') : t('vt_' + p.fits))}</dd>
      ${S.role !== 'mechanic' ? `<dt>${esc(t('sell'))}</dt><dd>${baht(p.price)}</dd>` : ''}${can('cost') ? `<dt>${esc(t('cost'))}</dt><dd>${baht(p.cost)} · ${esc(t('margin'))} ${marginPct(p)}%</dd>` : ''}<dt>${esc(t('supplier'))}</dt><dd>${esc(p.supplier || '—')}</dd></dl></div>
    <div class="cols">
    ${edit ? `<form class="card" data-form="recv"><h3>${esc(t('receive'))}</h3><div class="grid2">${inp('recv.qty', S.recv.qty, t('qty'), { mode: 'numeric' })}${can('cost') ? inp('recv.cost', S.recv.cost, t('unit_cost'), { mode: 'decimal', ph: String(p.cost) }) : ''}</div><button class="btn dark" type="submit">${ic('box')}${esc(t('receive'))}</button></form>
      <form class="card" data-form="count"><h3>${esc(t('count'))}</h3>${inp('cnt', S.cnt, t('counted'), { mode: 'numeric', ph: String(p.onHand) })}<button class="btn" type="submit">${esc(t('save'))}</button></form>` : ''}
    ${resv.length ? `<div class="card"><h3>${esc(t('reserved_for'))}</h3>${resv.map(r => `<button class="result" data-act="open" data-v="${esc(r.j.id)}"><span><b class="ref">${esc(r.j.ref)}</b> ${esc(vName(r.j.vehicle))}<br><small class="note">${esc(t('s_' + r.l.stock))} × ${r.l.qty}</small></span>${pill(r.j.status)}</button>`).join('')}</div>` : ''}
    <div class="card"><h3>${esc(t('stock_hist'))}</h3>${moves.length ? `<div class="tbl-wrap"><table class="tbl"><tbody>${moves.map(m => `<tr><td>${esc(fmtWhen(m.at))}</td><td>${esc(m.type === 'use' ? t('mv_use', { r: m.jobRef }) : t('mv_' + m.type))}${m.plate ? `<br><small class="note">${esc(m.plate)}</small>` : ''}</td><td class="r"><b>${m.qty > 0 ? '+' : ''}${m.qty}</b></td></tr>`).join('')}</tbody></table></div>` : `<p class="note">${esc(t('no_data'))}</p>`}</div>
    ${form}</div></div>`;
}

/* ================= owner ================= */
function pendingApprovals() {
  const out = [];
  jobsHere().forEach(j => {
    if (j.discount.status === 'pending') out.push({ type: 'disc', j: j });
    if (j.ownerOk === 'pending') out.push({ type: 'big', j: j });
  });
  return out;
}
function range(p) {
  const now = new Date(), d0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let from = d0;
  if (p === 'week') { const wd = (d0.getDay() + 6) % 7; from = new Date(d0); from.setDate(d0.getDate() - wd); }
  if (p === 'month') from = new Date(d0.getFullYear(), d0.getMonth(), 1);
  return [from.getTime(), now.getTime() + 1];
}
const inR = (iso, r) => { const x = new Date(iso).getTime(); return x >= r[0] && x < r[1]; };
function doneAt(j) { const e = j.timeline.filter(x => x.kind === 'status' && (x.status === 'ready' || x.status === 'completed')).slice(-1)[0]; return e ? e.at : null; }
function techStats(r) {
  const rows = {};
  mechanics().forEach(m => { rows[m] = { m: m, jobs: 0, clocked: 0, billed: 0 }; });
  jobsHere().forEach(j => {
    Array.from(new Set(j.timeLogs.map(l => l.mech))).forEach(m => { rows[m] = rows[m] || { m: m, jobs: 0, clocked: 0, billed: 0 }; rows[m].clocked += loggedMs(j, m, r[0], r[1]); });
    const da = doneAt(j);
    if (da && inR(da, r) && j.mechanic && (j.status === 'ready' || j.status === 'completed')) {
      rows[j.mechanic] = rows[j.mechanic] || { m: j.mechanic, jobs: 0, clocked: 0, billed: 0 };
      rows[j.mechanic].jobs++;
      rows[j.mechanic].billed += sum(j.lines.filter(l => l.kind === 'labour' && l.state === 'approved'), l => l.qty);
    }
  });
  return Object.values(rows).map(x => Object.assign(x, { clockedH: x.clocked / 3600000, eff: x.clocked ? Math.round(x.billed / (x.clocked / 3600000) * 100) : null }));
}
function viewDash() {
  const all = jobsHere(), td = range('today'), wk = range('week');
  const revToday = sum(all, j => sum(j.payments.filter(p => inR(p.at, td)), p => p.amount));
  const ts = techStats(wk), cl = sum(ts, x => x.clockedH), bi = sum(ts, x => x.billed);
  const pend = pendingApprovals(), custWait = all.filter(j => j.estimate.status === 'sent' && proposed(j).length).length;
  const low = partsHere().filter(isLow);
  const kpi = (v, k, st, act, icn) => `<button class="kpi st-${st}" ${act ? `data-act="go" data-v="${act}"` : 'disabled style="cursor:default"'}>${ic(icn)}<b>${v}</b><span>${esc(t(k))}</span></button>`;
  const ms = mechanics();
  return `<div class="view"><div class="intro"><h1>${esc(t('nav_dash'))}</h1><p class="sub">${esc(fmtLong(today()))}</p></div>${roBanner()}
    <div class="kpis">${kpi(all.filter(j => IN_SHOP.indexOf(j.status) >= 0).length, 'k_inshop', 'in_progress', 'board', 'wrench')}${kpi(baht(revToday), 'k_revenue', 'ready', 'reports', 'cash')}
      ${kpi(pend.length + custWait, 'k_pending', 'approval', null, 'hourglass')}${kpi(low.length, 'k_low', 'parts_wait', 'stock', 'box')}${kpi(cl ? Math.round(bi / cl * 100) + '%' : '—', 'k_eff', 'qc', 'reports', 'gauge')}</div>
    <div class="cols">
    <div class="card${pend.length ? ' hl' : ''}"><h3>${esc(t('your_approvals'))}</h3>${pend.length ? pend.map(x => {
      const et = estTotals(x.j), label = x.type === 'disc' ? t('appr_disc', { r: x.j.ref, p: x.j.discount.pct, a: baht(r2(sum(x.j.lines.filter(l => l.state !== 'declined'), lineAmt) * x.j.discount.pct / 100)) }) : t('appr_big', { r: x.j.ref, a: baht(et.total) });
      return `<div class="section"><button class="result" data-act="open" data-v="${esc(x.j.id)}"><span>${esc(label)}<br><small class="note">${esc(vName(x.j.vehicle))} · ${esc(x.j.customer.name)}</small></span></button><div class="grid2"><button class="btn ok sm" data-act="ownerok" data-k="${x.type}" data-v="${esc(x.j.id)}">${ic('check')}${esc(t('approve'))}</button><button class="btn danger sm" data-act="ownerno" data-k="${x.type}" data-v="${esc(x.j.id)}">${ic('x')}${esc(t('reject'))}</button></div></div>`;
    }).join('') : `<p class="note">${esc(t('nothing'))}</p>`}</div>
    <div class="card"><h3>${esc(t('working'))}</h3><div class="tbl-wrap"><table class="tbl"><tbody>${ms.map(m => {
      const run = all.filter(j => j.timers && j.timers[m]), act = all.filter(j => j.mechanic === m && IN_SHOP.indexOf(j.status) >= 0).length;
      return `<tr><td><b>${esc(m)}</b><br><small class="note">${esc(t('jobs_n', { n: act }))}</small></td><td>${run.length ? run.map(j => `<span class="ref">${esc(j.ref)}</span> ${esc(vName(j.vehicle))} · <span data-since="${esc(j.timers[m])}" data-base="0">${clock(Date.now() - new Date(j.timers[m]).getTime())}</span>`).join('<br>') : `<span class="note">${esc(t('idle'))}</span>`}</td></tr>`;
    }).join('')}</tbody></table></div></div>
    ${attentionHtml()}
    <div class="card"><div class="section-head"><h3>${esc(t('k_low'))}</h3><button class="btn sm" data-act="lowstock">${esc(t('nav_stock'))}</button></div>${low.length ? low.slice(0, 6).map(p => `<button class="result" data-act="openpart" data-v="${esc(p.id)}"><span>${esc(p.name)}<br><small class="note">${esc(t('available'))} ${avail(p)} · ${esc(t('reorder_at'))} ${p.reorderLevel}</small></span><b>${esc(t('suggest', { q: suggestQty(p) }))}</b></button>`).join('') : `<p class="note">${esc(t('nothing'))}</p>`}</div>
    </div></div>`;
}
function viewReports() {
  const r = range(S.period), all = jobsHere();
  const pays = []; all.forEach(j => j.payments.forEach(p => { if (inR(p.at, r)) pays.push(Object.assign({ j: j }, p)); }));
  const revenue = sum(pays, p => p.amount), vatIn = D.settings.vat ? r2(revenue * 7 / 107) : 0;
  const uses = Array.from(D.moves.values()).filter(m => m.type === 'use' && inR(m.at, r) && inBranch(m));
  const partsCost = r2(sum(uses, m => -m.qty * (Number(m.cost) || 0)));
  const exps = Array.from(D.expenses.values()).filter(e => inR(e.at, r) && inBranch(e)).sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const expSum = sum(exps, e => e.amount), gross = r2(revenue - vatIn - partsCost), net = r2(gross - expSum);
  const done = all.filter(j => j.status === 'completed' && doneAt(j) && inR(doneAt(j), r));
  const aro = done.length ? sum(done, j => totals(j).total) / done.length : 0;
  const ts = techStats(r).filter(x => x.jobs || x.clocked);
  const pp = {}; uses.forEach(m => { const k = m.partId; pp[k] = pp[k] || { name: m.partName, qty: 0, rev: 0, cost: 0 }; pp[k].qty += -m.qty; pp[k].rev += -m.qty * (Number(m.price) || 0); pp[k].cost += -m.qty * (Number(m.cost) || 0); });
  const ppl = Object.values(pp).sort((a, b) => (b.rev - b.cost) - (a.rev - a.cost));
  const byM = {}; pays.forEach(p => { byM[p.method] = (byM[p.method] || 0) + Number(p.amount); });
  const invJobs = all.filter(j => j.payments.some(p => inR(p.at, r)) || (j.status === 'ready'));
  const E = S.exp;
  const row = (k, v, cls) => `<tr class="${cls || ''}"><td>${esc(t(k))}</td><td class="r">${baht(v)}</td></tr>`;
  return `<div class="view"><div class="section-head"><h1>${esc(t('nav_reports'))}</h1><div class="seg" role="group">${['today', 'week', 'month'].map(p => `<button data-act="period" data-v="${p}" aria-pressed="${S.period === p}">${esc(t('p_' + p))}</button>`).join('')}</div></div>
    <div class="kpis k4"><div class="kpi st-ready">${ic('cash')}<b>${baht(revenue)}</b><span>${esc(t('revenue'))}</span></div><div class="kpi st-${net < 0 ? 'cancelled' : 'ready'}">${ic('chart')}<b>${baht(net)}</b><span>${esc(t('net'))}</span></div><div class="kpi st-booked"><b>${done.length}</b><span>${esc(t('jobs_done'))}</span></div><div class="kpi st-in_progress"><b>${baht(aro)}</b><span>${esc(t('aro'))}</span></div></div>
    <div class="cols">
    <div class="card"><h3>${esc(t('pl'))}</h3><div class="tbl-wrap"><table class="tbl"><tbody>${row('revenue', revenue)}${D.settings.vat ? row('vat_col', -vatIn) : ''}${row('parts_cost', -partsCost)}${row('gross', gross, 'sum')}${row('expenses', -expSum)}${row('net', net, 'sum' + (net < 0 ? ' neg' : ''))}</tbody></table></div>
      ${Object.keys(byM).length ? `<h3>${esc(t('by_method'))}</h3><div class="tbl-wrap"><table class="tbl"><tbody>${Object.keys(byM).map(m => `<tr><td>${esc(t('pm_' + m))}</td><td class="r">${baht(byM[m])}</td></tr>`).join('')}</tbody></table></div>` : ''}</div>
    <div class="card"><h3>${esc(t('tech_prod'))}</h3>${ts.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>${esc(t('mechanic'))}</th><th class="r">${esc(t('jobs_done'))}</th><th class="r">${esc(t('h_clocked'))}</th><th class="r">${esc(t('h_billed'))}</th><th class="r">${esc(t('eff'))}</th></tr></thead><tbody>${ts.map(x => `<tr><td>${esc(x.m)}</td><td class="r">${x.jobs}</td><td class="r">${(Math.round(x.clockedH * 10) / 10)}</td><td class="r">${(Math.round(x.billed * 10) / 10)}</td><td class="r">${x.eff == null ? '—' : x.eff + '%'}</td></tr>`).join('')}</tbody></table></div>` : `<p class="note">${esc(t('no_data'))}</p>`}</div>
    <div class="card"><h3>${esc(t('parts_profit'))}</h3>${ppl.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>${esc(t('part'))}</th><th class="r">${esc(t('sold'))}</th><th class="r">${esc(t('revenue'))}</th><th class="r">${esc(t('profit'))}</th><th class="r">%</th></tr></thead><tbody>${ppl.map(x => `<tr><td>${esc(x.name)}</td><td class="r">${x.qty}</td><td class="r">${baht(x.rev)}</td><td class="r">${baht(x.rev - x.cost)}</td><td class="r">${x.rev ? Math.round((x.rev - x.cost) / x.rev * 100) : 0}%</td></tr>`).join('')}</tbody></table></div>` : `<p class="note">${esc(t('no_data'))}</p>`}</div>
    <div class="card"><h3>${esc(t('invoices'))}</h3>${invJobs.length ? `<div class="tbl-wrap"><table class="tbl"><tbody>${invJobs.map(j => { const tt = totals(j); return `<tr><td><button class="back" data-act="open" data-v="${esc(j.id)}"><span class="ref">${esc(j.ref)}</span></button><br><small class="note">${esc(j.customer.name)}</small></td><td class="r">${baht(tt.total)}</td><td class="r">${tt.due > 0 ? `<span class="mini bad">${esc(t('due'))} ${baht(tt.due)}</span>` : `<span class="mini ok">${esc(t('paid'))}</span>`}</td></tr>`; }).join('')}</tbody></table></div>` : `<p class="note">${esc(t('no_data'))}</p>`}</div>
    <div class="card span"><h3>${esc(t('expenses'))}</h3>${exps.length ? `<div class="tbl-wrap"><table class="tbl"><tbody>${exps.map(e => `<tr><td>${esc(fmtDay(dayOf(e.at)))}</td><td>${esc(t('ex_' + e.cat))}${e.note ? ` · <span class="note">${esc(e.note)}</span>` : ''}</td><td class="r">${baht(e.amount)}</td></tr>`).join('')}</tbody></table></div>` : `<p class="note">${esc(t('no_data'))}</p>`}
      <form class="addbox" data-form="expense"><span class="lbl">${esc(t('add_expense'))}</span><div class="chips">${EXP_CATS.map(c => `<button type="button" class="chip sm" data-act="pick" data-k="exp.cat" data-v="${c}" aria-pressed="${E.cat === c}">${esc(t('ex_' + c))}</button>`).join('')}</div>
        <div class="grid2">${inp('exp.amount', E.amount, t('amount'), { mode: 'decimal' })}${inp('exp.note', E.note, t('note'))}</div><button class="btn dark" type="submit">${ic('plus')}${esc(t('add_expense'))}</button></form></div>
    </div></div>`;
}
function viewSettings() {
  const s = S.setDraft || (S.setDraft = clone(D.settings));
  const hours = []; for (let h = 5; h <= 23; h++) hours.push(h);
  const hourSel = (k, label) => `<div class="field"><label for="f-set-${k}">${esc(label)}</label><select class="input" id="f-set-${k}" data-bind="setDraft.${k}" data-num="1">${hours.map(x => `<option value="${x}"${Number(s[k]) === x ? ' selected' : ''}>${pad(x)}:00</option>`).join('')}</select></div>`;
  const dayNames = []; for (let d = 0; d < 7; d++) dayNames.push(new Intl.DateTimeFormat(loc(), { weekday: 'long' }).format(new Date(2026, 10, 15 + d)));
  const hasEx = COLS.some(c => Array.from(D[c].values()).some(o => o.example));
  return `<form class="view" data-form="settings"><div class="intro"><h1>${esc(t('settings_title'))}</h1><p class="sub">${esc(t('settings_note'))}</p></div>${roBanner()}<div class="banner">${esc(t('demo_roles'))}</div>
    <div class="cols"><div class="card"><span class="lbl">${esc(t('logo'))}</span><div class="row">${s.logo || logoSrc(true) ? `<img class="logo" style="height:56px;max-width:160px;background:#fff;padding:4px" alt="" src="${esc(s.logo || logoSrc(true))}">` : '<svg class="logo-mark" style="width:56px;height:56px" aria-hidden="true"><use href="#i-mark"/></svg>'}
      <label class="btn sm" for="f-ph-logo">${ic('upload')}${esc(t('add_photo'))}</label><input type="file" accept="image/*" id="f-ph-logo" data-photo-target="logo" style="position:absolute;width:1px;height:1px;opacity:0">
      ${s.logo ? `<button type="button" class="btn sm ghost" data-act="clearlogo">${esc(t('remove'))}</button>` : ''}</div><p class="note">${esc(t('logo_hint'))}</p>
      ${inp('setDraft.name', s.name, t('shop_name'))}${inp('setDraft.address', s.address, t('address'), { ph: 'Taling Chan, Bangkok' })}
      <div class="grid2">${inp('setDraft.phone', s.phone, t('shop_phone'), { type: 'tel', mode: 'tel' })}${inp('setDraft.line', s.line, t('shop_line'), { ph: '@yourshop' })}</div>${inp('setDraft.promptpay', s.promptpay, t('promptpay'), { mode: 'numeric', ph: '081 234 5678' })}</div>
    <div class="card"><h3>${esc(t('opening'))}</h3><div class="grid2">${hourSel('open', t('opens'))}${hourSel('close', t('closes'))}</div>
      <div class="field"><label for="f-set-closedDay">${esc(t('closed_day'))}</label><select class="input" id="f-set-closedDay" data-bind="setDraft.closedDay" data-num="1"><option value="-1"${Number(s.closedDay) < 0 ? ' selected' : ''}>${esc(t('none'))}</option>${dayNames.map((n, i) => `<option value="${i}"${Number(s.closedDay) === i ? ' selected' : ''}>${esc(n)}</option>`).join('')}</select></div>
      <div class="grid2">${inp('setDraft.perSlot', s.perSlot, t('per_slot'), { mode: 'numeric' })}${inp('setDraft.labourRate', s.labourRate, t('labour_rate'), { mode: 'numeric' })}</div></div>
    <div class="card">${inp('setDraft.mechanics', s.mechanics, t('mechanics'))}${inp('setDraft.branches', s.branches, t('branches'))}
      <div class="grid2">${inp('setDraft.bigJob', s.bigJob, t('big_job'), { mode: 'numeric' })}${inp('setDraft.discountLimit', s.discountLimit, t('disc_limit'), { mode: 'numeric' })}</div>
      <label class="switch" for="f-vat"><input type="checkbox" id="f-vat" data-bind="setDraft.vat"${s.vat ? ' checked' : ''}>${esc(t('vat_on'))}</label></div>
    ${staffSettingsHtml()}${appsCardHtml()}<div class="card"><h3>${esc(t('prices'))}</h3>${SERVICES.map(sv => `<div class="svc-price"><span>${esc(svcName(sv.key))}</span>
      ${['bike', 'car'].map((vt, i) => `<input class="input" aria-label="${esc(svcName(sv.key) + ' ' + t('vt_' + vt))}" inputmode="numeric" data-bind="setDraft.prices.${sv.key}.${i}" value="${esc((s.prices[sv.key] || [0, 0])[i])}"${sv.for !== 'both' && sv.for !== vt ? ' disabled' : ''}>`).join('')}</div>`).join('')}</div></div>
    <button class="btn primary block" type="submit"${D.readonly ? ' disabled' : ''}>${esc(t('save'))}</button>
    ${hasEx && !D.readonly ? `<button type="button" class="btn danger block" data-act="askexamples">${ic('trash')}${esc(t('clear_examples'))}</button>` : ''}</form>`;
}

/* ================= dialogs ================= */
let confirmFn = null;
function ask(msg, okLabel, fn) { confirmFn = fn; S.dlg = { type: 'confirm', msg: msg, ok: okLabel }; renderDialog(); }
function showText(txt) { S.dlg = { type: 'text', txt: txt }; renderDialog(); }
function closeDlg() { S.dlg = null; confirmFn = null; renderDialog(); }
function renderDialog() {
  const o = document.getElementById('overlay'), d = S.dlg;
  if (!d) { o.classList.add('hidden'); o.innerHTML = ''; return; }
  let h = '';
  if (d.type === 'confirm') h = `<p>${esc(d.msg)}</p><div class="grid2"><button class="btn" data-act="dlgno">${esc(t('cancel'))}</button><button class="btn danger" data-act="dlgyes">${esc(d.ok)}</button></div>`;
  if (d.type === 'text') h = `<p>${esc(t('copy_fail'))}</p><textarea class="input" readonly style="min-height:180px">${esc(d.txt)}</textarea><button class="btn dark" data-act="dlgno">${esc(t('close'))}</button>`;
  if (d.type === 'fit') {
    const j = D.jobs.get(d.jobId), l = j && j.lines.find(x => x.id === d.lineId);
    if (!l) { S.dlg = null; return renderDialog(); }
    const ok = fitReady(d);
    h = `<h2>${esc(t('fit_title', { p: l.desc }))}</h2><p class="sub">${esc(t('fit_intro2'))}</p>
      <div class="shots">${photoTile('dlg.before', d.before, '1 · ' + t('cap_old'))}${photoTile('dlg.box', d.box, '2 · ' + t('cap_box'))}${photoTile('dlg.after', d.after, '3 · ' + t('cap_fitted'))}</div>
      <p class="note">1 · ${esc(t('photo_old'))}<br>2 · ${esc(t('photo_box'))}<br>3 · ${esc(t('photo_fitted'))}</p>
      <span class="lbl">${esc(t('ptype'))}</span><div class="chips">${['genuine', 'aftermarket', 'used'].map(k => `<button type="button" class="chip sm" data-act="fitpt" data-v="${k}" aria-pressed="${d.ptype === k}">${esc(t('pt_' + k))}</button>`).join('')}</div>
      <div class="grid2"><div class="field"><label for="f-dlg-brand">${esc(t('part_brand'))}</label><input class="input" id="f-dlg-brand" data-bind="dlg.brand" value="${esc(d.brand)}" maxlength="60"></div>
        <div class="field"><label for="f-dlg-pno">${esc(t('part_no'))}</label><input class="input mono" id="f-dlg-pno" data-bind="dlg.partNo" value="${esc(d.partNo)}" maxlength="60"></div></div>
      <span class="lbl">${esc(t('old_handling'))}</span><div class="chips">${['return', 'dispose'].map(k => `<button type="button" class="chip sm" data-act="fitold" data-v="${k}" aria-pressed="${d.old === k}">${esc(t('old_' + k))}</button>`).join('')}</div>
      ${ok ? '' : `<p class="note">${esc(t('need_three'))}</p>`}
      <div class="grid2"><button class="btn" data-act="dlgno">${esc(t('cancel'))}</button><button class="btn primary" data-act="dofit"${ok ? '' : ' disabled'}>${esc(t('confirm_fit'))}</button></div>`;
  }
  if (d.type === 'install') h = installDialogHtml();
  if (d.type === 'odo') {
    const ok = odoReady(d);
    h = `<h2>${esc(t('odo_title'))} · ${esc(t('odo_' + d.side))}</h2>
      <div class="shots one">${photoTile('dlg.photo', d.photo, t('odo_photo'))}</div>
      <div class="field"><label for="f-dlg-km">${esc(t('odo_km'))}</label><input class="input mono" id="f-dlg-km" inputmode="numeric" data-bind="dlg.km" value="${esc(d.km)}" data-odo-km="1"></div>
      <span class="lbl">${esc(t('fuel'))}</span><div class="chips">${FUEL.map(f => `<button type="button" class="chip sm" data-act="odofuel" data-v="${f}" aria-pressed="${d.fuel === f}">${esc(fuelLabel(f))}</button>`).join('')}</div>
      ${ok ? '' : `<p class="note">${esc(t('odo_need'))}</p>`}
      <div class="grid2"><button class="btn" data-act="dlgno">${esc(t('cancel'))}</button><button class="btn primary" data-act="doodo"${ok ? '' : ' disabled'}>${esc(t('save'))}</button></div>`;
  }
  o.innerHTML = `<div class="dialog${S.role === 'mechanic' ? ' mech' : ''}">${h}</div>`;
  o.classList.remove('hidden');
}
let toastTimer;
function toast(msg) { const el = document.getElementById('toast'); el.textContent = msg; el.classList.remove('hidden'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.add('hidden'), 2600); }
function copy(txt) { try { navigator.clipboard.writeText(txt).then(() => toast(t('copied')), () => showText(txt)); } catch (e) { showText(txt); } }
function tickTimers() { document.querySelectorAll('[data-since]').forEach(el => { el.textContent = clock(Number(el.getAttribute('data-base') || 0) + Date.now() - new Date(el.getAttribute('data-since')).getTime()); }); }
setInterval(tickTimers, 15000);

/* ================= job mutations ================= */
const cj = id => { const j = D.jobs.get(id); return j ? clone(j) : null; };
const saveJ = j => put('jobs', j);
function ev(j, event, extra) { j.timeline.push(Object.assign({ at: nowIso(), kind: 'event', event: event, by: whoAmI() }, extra || {})); }
function setStatus(j, s, by) {
  if (j.status === s) return;
  j.status = s;
  j.timeline.push({ at: nowIso(), kind: 'status', status: s, by: by || whoAmI() });
  if (s === 'inspection' && !j.dvi.length) j.dvi = DVI[j.vehicle.type === 'car' ? 'car' : 'bike'].map(k => ({ key: k, rating: null, note: '', photo: null }));
  if (['ready', 'completed', 'cancelled'].indexOf(s) >= 0) stopTimers(j);
  if (s === 'cancelled') j.lines.forEach(l => { if (l.stock === 'reserved') unreserveLine(l); });
}
function stopTimers(j) { Object.keys(j.timers || {}).forEach(m => j.timeLogs.push({ id: newId('tl'), mech: m, start: j.timers[m], end: nowIso() })); j.timers = {}; }
function reserveLine(l) {
  const p = l.partId && D.parts.get(l.partId);
  if (p && avail(p) >= Number(l.qty)) { adjustStock(p.id, 0, Number(l.qty)); l.stock = 'reserved'; return true; }
  l.stock = 'needed'; return false;
}
function unreserveLine(l) { if (l.partId) adjustStock(l.partId, 0, -Number(l.qty)); l.stock = 'none'; }
function afterApproval(j, by) {
  let needed = false;
  j.lines.forEach(l => { if (l.kind === 'part' && l.state === 'approved' && l.stock === 'none' && l.partId) { if (!reserveLine(l)) needed = true; } });
  if (j.status === 'approval' && j.lines.some(l => l.state === 'approved')) setStatus(j, 'approved', by);
  if (needed && ['approved', 'in_progress'].indexOf(j.status) >= 0) setStatus(j, 'parts_wait', by);
}
function sendEstimate(j, force) {
  const et = estTotals(j), lim = Number(D.settings.bigJob) || 0;
  if (!force && S.role !== 'owner' && lim > 0 && et.total > lim && j.ownerOk !== 'approved') {
    j.estimate = Object.assign({}, j.estimate, { status: 'owner', at: nowIso() }); j.ownerOk = 'pending';
    toast(t('big_job_pending', { a: baht(lim) })); return;
  }
  j.estimate = { status: 'sent', sentAt: nowIso() };
  ev(j, 'est_sent', { amount: et.total });
  if (['received', 'inspection'].indexOf(j.status) >= 0) setStatus(j, 'approval');
}
function fitReady(d) { return !!(d.before && d.box && d.after && d.ptype); }
function odoReady(d) { return !!(d.photo && num(d.km) > 0 && d.fuel); }
function oldToGive(j) { return j.oldGivenAt ? [] : j.lines.filter(l => l.kind === 'part' && l.stock === 'fitted' && l.oldPart === 'return'); }
function addPhotoMeta(j, data, meta) {
  const id = newId('ph');
  putPhoto(id, j.id, data);
  j.photos.push(Object.assign({ id: id, stage: j.status, at: nowIso(), by: whoAmI() }, meta));
  return id;
}
function vehicleFrom(f) { return { type: f.vtype, brand: f.brand, model: f.model.trim(), year: String(f.year || '').trim(), vin: String(f.vin || '').trim().toUpperCase(), mileage: digits(f.mileage), series: f.series.trim(), number: f.number.trim(), province: f.province.trim() }; }
function invoiceText(j) {
  const s = D.settings, tt = totals(j), out = [s.name];
  if (s.address) out.push(s.address); if (s.phone) out.push(t('phone') + ' ' + s.phone);
  out.push('', t('invoice') + ' ' + j.ref + ' · ' + fmtLong(today()), vName(j.vehicle) + (plateText(j.vehicle) ? ' · ' + plateText(j.vehicle) : ''), j.customer.name, '');
  j.lines.filter(l => l.state === 'approved').forEach(l => out.push(l.desc + (Number(l.qty) !== 1 ? ' × ' + l.qty : '') + '  ' + baht(lineAmt(l))));
  out.push('');
  if (tt.disc) out.push(t('discount') + ' ' + discOn(j) + '%  −' + baht(tt.disc));
  if (D.settings.vat) out.push(t('vat') + ' ' + baht(tt.vat));
  out.push(t('total') + ' ' + baht(tt.total));
  if (tt.paid) out.push(t('paid') + ' ' + baht(tt.paid), t('due') + ' ' + baht(Math.max(0, tt.due)));
  if (D.settings.promptpay) out.push('', 'PromptPay ' + D.settings.promptpay);
  out.push('', t('thanks'));
  return out.join('\n');
}
function customerMsg(j) {
  const tt = totals(j), parts = [t('msg_hi', { n: j.customer.name }), t('msg_body', { b: vName(j.vehicle), s: stLabel(j.status, true) })];
  if (tt.total && (j.status === 'ready' || j.status === 'approval')) parts.push(t('msg_total', { t: baht(j.status === 'approval' ? estTotals(j).total : tt.due) }));
  parts.push(t('msg_code', { r: j.ref }));
  if (SITE) parts.push(t('msg_link', { u: extUrl(appUrl('customer')) }));
  return parts.join(' ');
}

/* ================= actions ================= */
const READ_ACTS = ['appkind', 'signout', 'authmode', 'lang', 'role', 'go', 'open', 'openjob', 'openpart', 'tab', 'pick', 'clearphoto', 'newbooking', 'trackref', 'trackpick', 'copybooking', 'estyn', 'estall', 'me',
  'linekind', 'paymethod', 'copyinvoice', 'copymsg', 'apptday', 'boardmode', 'stockf', 'copyorder', 'period', 'lowstock', 'dlgno', 'fit', 'fitpt', 'fitold', 'odo', 'odofuel', 'install', 'installno', 'copyapp', 'shareapp'];
const A = {
  lang: el => { lang = el.dataset.v; lsSet('motoapp.lang', lang); render(); },
  role: el => { const r = el.dataset.v; setRole(r); go(S.lastStaff[r] || HOME[r]); },
  go: el => go(el.dataset.v),
  open: el => go('job', el.dataset.v),
  openjob: el => { const id = el.dataset.v, tab = el.dataset.tab || ''; if (S.view === 'job' && S.id === id) { S.tab = tab; render(); } else { S.pendingTab = tab; go('job', id); } },
  openpart: el => go('part', el.dataset.v),
  tab: el => {
    S.tab = el.dataset.v;
    if (S.tab === 'chat') { const j = D.jobs.get(S.id); if (j && unreadChat(j)) { const c = clone(j); c.shopSeen = nowIso(); saveJ(c); } }
    render();
  },
  pick: el => {
    const k = el.dataset.k, v = el.dataset.v, parts = k.split('.');
    const obj = S[parts[0]], key = parts[1];
    if (key === 'mechanic' && obj[key] === v) obj[key] = '';
    else if (key === 'now') obj.now = !!v;
    else obj[key] = v;
    if (key === 'date') obj.time = '';
    if (key === 'vtype') { obj.brand = ''; const svc = SERVICES.find(s => s.key === obj.service); if (svc && svc.for !== 'both' && svc.for !== v) obj.service = ''; }
    S.err = ''; render();
  },
  clearphoto: el => { const k = el.dataset.v; if (k.indexOf('dlg.') === 0) { S.dlg[k.slice(4)] = null; renderDialog(); return; } setPath(S, k, null); render(); },
  appkind: el => { S.appKind = el.dataset.v; lsSet('motoapp.kind', S.appKind); const r = kindRoles(S.appKind)[0]; setRole(r); go(S.lastStaff[r] || HOME[r]); },
  signout: () => { if (sb) sb.auth.signOut(); location.hash = 'book'; },
  authmode: () => { S.authMode = S.authMode === 'up' ? 'in' : 'up'; S.authErr = ''; render(); },
  newbooking: () => { S.booked = null; S.bookedId = null; S.form = blankForm(); render(); window.scrollTo(0, 0); },
  trackref: el => { S.trackQ = S.trackDone = el.dataset.v; S.trackPick = null; S.bookedId = null; S.booked = null; go('track'); if (custLive()) refreshTrack(); },
  trackpick: el => { S.trackPick = el.dataset.v || null; S.est = {}; render(); window.scrollTo(0, 0); },
  copybooking: el => { const j = D.jobs.get(el.dataset.v) || (S.booked && S.booked.id === el.dataset.v ? S.booked : null); if (j) copy([D.settings.name, t('booking_code') + ': ' + j.ref, svcName(j.service), vName(j.vehicle) + (plateText(j.vehicle) ? ' · ' + plateText(j.vehicle) : ''), fmtDay(j.date) + ' ' + j.time].join('\n')); },
  estyn: el => { S.est[el.dataset.k] = el.dataset.v; render(); },
  estall: () => { const j = currentTrackJob(); if (j) proposed(j).forEach(l => { S.est[l.id] = 'y'; }); render(); },
  answer: el => {
    if (custLive()) {
      const jl = S.trackJobs.find(x => x.id === el.dataset.v); if (!jl) return;
      if (!proposed(jl).every(l => S.est[l.id])) { toast(t('answer_all')); return; }
      rpc('answer_estimate', { code: jl.ref, phone: S.trackPhone, answers: S.est }).then(res => { replaceTrackJob(res); S.est = {}; toast(t('answer_sent')); render(); }, e => toast(rpcError(e)));
      return;
    }
    const j = cj(el.dataset.v); if (!j) return;
    const pl = proposed(j); if (!pl.every(l => S.est[l.id])) { toast(t('answer_all')); return; }
    let y = 0; pl.forEach(l => { l.state = S.est[l.id] === 'y' ? 'approved' : 'declined'; if (l.state === 'approved') y++; });
    j.estimate = Object.assign({}, j.estimate, { status: 'answered', answeredAt: nowIso() });
    ev(j, 'est_answer', { y: y, n: pl.length, by: 'customer' });
    afterApproval(j, 'customer');
    saveJ(j); S.est = {}; toast(t('answer_sent')); render();
  },
  me: el => { S.me = el.dataset.v; lsSet('motoapp.me', S.me); render(); },
  takejob: el => { const j = cj(el.dataset.v); if (!j || !S.me) return; j.mechanic = S.me; saveJ(j); go('job', j.id); },
  status: el => withJob(j => { setStatus(j, el.dataset.v); if (S.role === 'mechanic' && !j.mechanic && S.me) j.mechanic = S.me; }),
  checkin: el => { const j = cj(el.dataset.v); if (!j) return; setStatus(j, 'received'); saveJ(j); render(); },
  dvidone: () => withJob(j => { mergeNotes(j); j.dviDone = true; ev(j, 'dvi_done'); }),
  toqc: () => {
    const j = D.jobs.get(S.id); if (!j) return;
    const n = unfitted(j).length;
    const doit = () => withJob(x => setStatus(x, 'qc'));
    if (n) ask(t('unfitted_warn', { n: n }), t('go_on'), doit); else doit();
  },
  complete: () => {
    const j = D.jobs.get(S.id); if (!j) return;
    const due = totals(j).due, doit = () => withJob(x => setStatus(x, 'completed'));
    const warn = [];
    if (j.odo && j.odo.in && !j.odo.out) warn.push(t('odo_out_first'));
    if (oldToGive(j).length) warn.push(t('old_to_give') + ': ' + oldToGive(j).map(l => l.desc).join(', '));
    if (due > 0) warn.push(t('due_amt', { a: baht(due) }));
    if (warn.length) ask(warn.join('. ') + '. ' + t('act_complete') + '?', t('act_complete'), doit); else doit();
  },
  timer: () => {
    if (!S.me) { toast(t('pick_me')); return; }
    withJob(j => {
      if (j.timers[S.me]) { j.timeLogs.push({ id: newId('tl'), mech: S.me, start: j.timers[S.me], end: nowIso() }); delete j.timers[S.me]; }
      else { j.timers[S.me] = nowIso(); if (!j.mechanic) j.mechanic = S.me; }
    });
  },
  rate: el => withJob(j => { mergeNotes(j); const d = j.dvi.find(x => x.key === el.dataset.k); if (d) d.rating = el.dataset.v; }),
  savenotes: () => { withJob(j => mergeNotes(j)); toast(t('saved')); },
  reserve: el => withJob(j => { const l = j.lines.find(x => x.id === el.dataset.v); if (l && !reserveLine(l)) toast(t('not_enough')); }),
  unreserve: el => withJob(j => { const l = j.lines.find(x => x.id === el.dataset.v); if (l) unreserveLine(l); }),
  needpart: el => withJob(j => {
    const l = j.lines.find(x => x.id === el.dataset.v); if (!l) return;
    if (l.stock === 'reserved') unreserveLine(l);
    l.stock = 'needed'; ev(j, 'needed', { part: l.desc });
    if (['approved', 'in_progress'].indexOf(j.status) >= 0) setStatus(j, 'parts_wait');
  }),
  delline: el => withJob(j => { const l = j.lines.find(x => x.id === el.dataset.v); if (!l) return; if (l.stock === 'reserved') unreserveLine(l); j.lines = j.lines.filter(x => x !== l); }),
  addpartline: el => addPartLine(el.dataset.v),
  linekind: el => { S.line.kind = el.dataset.v; if (S.line.kind === 'labour' && !S.line.price) S.line.price = ''; render(); },
  fit: el => {
    const j = D.jobs.get(S.id), l = j && j.lines.find(x => x.id === el.dataset.v), p = l && l.partId && D.parts.get(l.partId);
    S.dlg = { type: 'fit', jobId: S.id, lineId: el.dataset.v, before: null, box: null, after: null, brand: (p && p.brand) || '', partNo: (p && p.sku) || '', ptype: (p && p.ptype) || '', old: 'return' };
    renderDialog();
  },
  fitpt: el => { if (S.dlg) { S.dlg.ptype = el.dataset.v; renderDialog(); } },
  fitold: el => { if (S.dlg) { S.dlg.old = el.dataset.v; renderDialog(); } },
  dofit: () => {
    const d = S.dlg; if (!d || !fitReady(d)) return;
    const j = cj(d.jobId); if (!j) return closeDlg();
    const l = j.lines.find(x => x.id === d.lineId); if (!l) return closeDlg();
    l.before = addPhotoMeta(j, d.before, { kind: 'before', lineId: l.id });
    l.box = addPhotoMeta(j, d.box, { kind: 'box', lineId: l.id });
    l.after = addPhotoMeta(j, d.after, { kind: 'after', lineId: l.id });
    l.brand = String(d.brand || '').trim().slice(0, 60); l.partNo = String(d.partNo || '').trim().slice(0, 60);
    l.ptype = d.ptype; l.oldPart = d.old === 'dispose' ? 'dispose' : 'return';
    l.fittedAt = nowIso(); l.fittedBy = whoAmI();
    const p = l.partId && D.parts.get(l.partId);
    if (p) {
      const wasRes = l.stock === 'reserved', q = Number(l.qty) || 0;
      adjustStock(p.id, -q, wasRes ? -q : 0);
      stockMove(p, -q, 'use', j, { cost: Number(l.cost) || Number(p.cost) || 0, price: Number(l.price) || 0 });
    }
    l.stock = 'fitted';
    ev(j, 'fitted', { part: l.desc });
    if (j.status === 'parts_wait' && !j.lines.some(x => x.stock === 'needed' && x.state === 'approved')) setStatus(j, 'in_progress');
    if (j.status === 'in_progress' && !unfitted(j).length) setStatus(j, 'parts_replaced');
    saveJ(j); closeDlg(); render();
  },
  odo: el => { S.dlg = { type: 'odo', jobId: S.id, side: el.dataset.v === 'out' ? 'out' : 'in', photo: null, km: '', fuel: '' }; renderDialog(); },
  odofuel: el => { if (S.dlg) { S.dlg.fuel = el.dataset.v; renderDialog(); } },
  doodo: () => {
    const d = S.dlg; if (!d || !odoReady(d)) return;
    const j = cj(d.jobId); if (!j) return closeDlg();
    const km = Math.round(num(d.km));
    j.odo = Object.assign({}, j.odo);
    j.odo[d.side] = { km: km, fuel: d.fuel, photo: addPhotoMeta(j, d.photo, { kind: 'odo_' + d.side }), at: nowIso(), by: whoAmI() };
    if (d.side === 'in' && !j.vehicle.mileage) j.vehicle = Object.assign({}, j.vehicle, { mileage: String(km) });
    ev(j, 'odo_' + d.side, { km: km });
    saveJ(j); closeDlg(); render();
  },
  install: () => doInstall(),
  installno: () => { lsSet(INST.key, '1'); render(); },
  copyapp: el => copy(extUrl(appUrl(el.dataset.v))),
  shareapp: el => { const u = extUrl(appUrl(el.dataset.v)); navigator.share({ title: D.settings.name + ' · ' + t('app_' + el.dataset.v), url: u }).catch(() => {}); },
  oldgiven: () => withJob(j => { j.oldGivenAt = nowIso(); ev(j, 'old_given'); }),
  sendest: () => withJob(j => { mergeNotes(j); sendEstimate(j); }),
  convert: () => withJob(j => {
    proposed(j).forEach(l => { l.state = 'approved'; });
    j.estimate = Object.assign({}, j.estimate, { status: 'answered', answeredAt: nowIso() });
    ev(j, 'converted'); afterApproval(j);
  }),
  assign: el => withJob(j => { j.mechanic = el.dataset.v; }),
  paymethod: el => { S.pay.method = el.dataset.v; render(); },
  copyinvoice: () => { const j = D.jobs.get(S.id); if (j) copy(invoiceText(j)); },
  copymsg: () => { const j = D.jobs.get(S.id); if (j) copy(customerMsg(j)); },
  apptday: el => { S.apptDay = el.dataset.v; render(); },
  boardmode: el => { S.boardMode = el.dataset.v; render(); },
  stockf: el => { S.stockF = el.dataset.v; render(); },
  lowstock: () => { S.stockF = 'low'; go('stock'); },
  copyorder: () => {
    const by = {};
    partsHere().filter(p => suggestQty(p) > 0).forEach(p => { const s = p.supplier || '—'; (by[s] = by[s] || []).push(p.name + ' (' + p.sku + ') × ' + suggestQty(p)); });
    jobsHere().forEach(j => j.lines.forEach(l => { if (!l.partId && l.kind === 'part' && l.stock === 'needed' && l.state === 'approved') (by['—'] = by['—'] || []).push(l.desc + ' × ' + l.qty + ' (' + j.ref + ')'); }));
    copy([D.settings.name, t('reorder_title') + ' · ' + fmtLong(today())].concat(Object.keys(by).map(s => '\n' + s + '\n' + by[s].map(x => '- ' + x).join('\n'))).join('\n'));
  },
  period: el => { S.period = el.dataset.v; render(); },
  ownerok: el => {
    const j = cj(el.dataset.v); if (!j) return;
    if (el.dataset.k === 'disc') { j.discount.status = 'approved'; ev(j, 'disc', { pct: j.discount.pct, s: t('approve') }); }
    else { j.ownerOk = 'approved'; ev(j, 'big_ok'); sendEstimate(j, true); }
    saveJ(j); render();
  },
  ownerno: el => {
    const j = cj(el.dataset.v); if (!j) return;
    if (el.dataset.k === 'disc') { j.discount.status = 'rejected'; ev(j, 'disc', { pct: j.discount.pct, s: t('reject') }); }
    else { j.ownerOk = 'rejected'; j.estimate = { status: 'none' }; }
    saveJ(j); render();
  },
  askdelete: () => {
    const j = D.jobs.get(S.id); if (!j) return;
    ask(t('confirm_delete', { r: j.ref }), t('del'), () => {
      j.lines.forEach(l => { if (l.stock === 'reserved') unreserveLine(clone(l)); });
      j.photos.forEach(p => { D.photos.delete(p.id); if (D.db) dbDel('photos/' + p.id).catch(() => {}); });
      drop('jobs', j.id); go('board');
    });
  },
  askexamples: () => ask(t('confirm_examples'), t('del'), () => {
    const tasks = [];
    D.jobs.forEach(j => { if (j.example) { j.photos.forEach(p => tasks.push(() => { D.photos.delete(p.id); return D.db ? dbDel('photos/' + p.id).catch(() => {}) : Promise.resolve(); })); tasks.push(() => drop('jobs', j.id)); } });
    ['parts', 'moves', 'expenses'].forEach(c => D[c].forEach(o => { if (o.example) tasks.push(() => drop(c, o.id)); }));
    tasks.reduce((p, f) => p.then(f), Promise.resolve()).then(() => { if (!D.db) persistLocal(); render(); });
    render();
  }),
  clearlogo: () => { if (S.setDraft) { S.setDraft.logo = ''; render(); } },
  dlgno: () => closeDlg(),
  dlgyes: () => { const f = confirmFn; closeDlg(); if (f) f(); }
};
function withJob(fn) { const j = cj(S.id); if (!j) return; fn(j); saveJ(j); render(); }
function mergeNotes(j) { Object.keys(S.dviNotes).forEach(k => { const d = j.dvi.find(x => x.key === k); if (d) d.note = S.dviNotes[k]; }); S.dviNotes = {}; }
function currentTrackJob() { if (custLive()) return S.trackJobs.find(j => j.id === S.trackPick) || S.trackJobs[0]; const res = findJobs(S.trackDone); return res.length === 1 ? res[0] : res.find(j => j.id === S.trackPick); }
function addPartLine(pid) {
  const p = D.parts.get(pid); if (!p) return;
  withJob(j => {
    const isRO = j.lines.some(l => l.state === 'approved');
    j.lines.push({ id: newId('l'), kind: 'part', partId: p.id, desc: p.name, qty: 1, price: Number(p.price) || 0, cost: Number(p.cost) || 0, state: 'proposed', stock: 'none', extra: isRO });
  });
  S.lineQ = ''; render();
}
function setPath(obj, path, val) { const p = path.split('.'); let o = obj; for (let i = 0; i < p.length - 1; i++) o = o[p[i]]; o[p[p.length - 1]] = val; }

/* ================= forms ================= */
async function bookLive(f) {
  S.err = ''; S.busy = true; render();
  try {
    let pid = null;
    if (f.photo) { pid = newId('b'); const up = await sb.storage.from('photos').upload(photoPath(pid), dataUrlToBlob(f.photo), { contentType: 'image/jpeg' }); if (up.error) pid = null; }
    const v = vehicleFrom(f);
    const res = await rpc('book', { j: { service: f.service, vehicle: v, problem: f.problem.trim(), date: f.date, time: f.time, photo: pid, loc: curBranch(),
      customer: { name: f.name.trim(), phone: f.phone.trim(), line: f.line.trim() } } });
    S.booked = { id: res.id, ref: res.ref, vehicle: v, service: f.service, date: f.date, time: f.time, customer: { name: f.name.trim() } };
    S.trackCode = res.ref; S.trackPhone = f.phone.trim(); S.trackJobs = []; S.trackPick = null;
    lsSet('motoapp.lastRef', res.ref); lsSet('motoapp.lastPhone', S.trackPhone);
    S.form = blankForm(); S.slotCounts = {};
  } catch (e) { S.err = rpcError(e); if (/slot_full/.test(String(e && e.message))) { delete S.slotCounts[f.date]; f.time = ''; } }
  S.busy = false; render(); window.scrollTo(0, 0);
}
const FORMS = {
  auth: () => doAuth(),
  noop: () => {},
  book: () => {
    const f = S.form, miss = [];
    if (!f.brand && !f.model.trim()) miss.push(t('brand'));
    if (!f.service) miss.push(t('service'));
    if (!f.date) miss.push(t('day'));
    if (!f.time) miss.push(t('time'));
    if (!f.name.trim()) miss.push(t('name'));
    if (digits(f.phone).length < 9) miss.push(t('phone'));
    if (miss.length) { S.err = t('need', { f: miss.join(', ') }); render(); const e = document.querySelector('.err'); if (e) e.scrollIntoView({ block: 'center' }); return; }
    if (slotUsed(f.date, f.time) >= Math.max(1, Number(D.settings.perSlot) || 1)) { f.time = ''; S.err = t('need', { f: t('time') }); render(); return; }
    if (custLive()) { bookLive(f); return; }
    const now = nowIso();
    const j = norm({ id: newId('j'), ref: newRef(), loc: curBranch(), createdAt: now, source: 'online', service: f.service, vehicle: vehicleFrom(f), problem: f.problem.trim(),
      date: f.date, time: f.time, customer: { name: f.name.trim(), phone: f.phone.trim(), line: f.line.trim() }, status: 'booked', mechanic: '',
      timeline: [{ at: now, kind: 'status', status: 'booked', by: 'customer' }] });
    if (f.photo) addPhotoMeta(j, f.photo, { kind: 'customer', stage: 'booked', by: 'customer' });
    saveJ(j); lsSet('motoapp.lastRef', j.ref);
    S.bookedId = j.id; S.form = blankForm(); S.err = ''; render(); window.scrollTo(0, 0);
  },
  track: () => {
    if (custLive()) {
      S.trackCode = S.trackCode.trim().toUpperCase(); if (/^\d{4}$/.test(S.trackCode)) S.trackCode = 'MB-' + S.trackCode;
      if (!S.trackCode || digits(S.trackPhone).length < 9) { S.trackErr = t('track_sub2'); render(); return; }
      S.est = {}; S.seenFor = null; S.trackPick = null; lsSet('motoapp.lastRef', S.trackCode); lsSet('motoapp.lastPhone', S.trackPhone); refreshTrack(); return;
    }
    S.trackDone = S.trackQ.trim(); S.trackPick = null; S.est = {}; S.seenFor = null; const m = findJobs(S.trackDone); if (m.length === 1) lsSet('motoapp.lastRef', m[0].ref); render(); },
  chat: form => {
    const text = S.chatText.trim(); if (!text) return;
    if (custLive()) {
      const jl = S.trackJobs.find(x => x.id === form.getAttribute('data-id')); if (!jl) return;
      rpc('customer_message', { code: jl.ref, phone: S.trackPhone, msg: text }).then(res => { replaceTrackJob(res); S.chatText = ''; render(); }, e => toast(rpcError(e)));
      return;
    }
    const id = form.getAttribute('data-id'), j = cj(id); if (!j) return;
    const cust = S.view === 'track';
    j.chat.push({ id: newId('c'), from: cust ? 'customer' : 'shop', name: cust ? j.customer.name : whoAmI(), text: text, at: nowIso() });
    if (!cust) j.shopSeen = nowIso();
    saveJ(j); S.chatText = ''; render();
    const inp2 = document.getElementById('f-chatText'); if (inp2) inp2.focus();
  },
  task: () => { const txt = S.taskText.trim(); if (!txt) return; withJob(j => j.tasks.push({ id: newId('t'), text: txt, done: false, by: whoAmI() })); S.taskText = ''; render(); },
  note: () => {
    if (!S.note.trim() && !S.notePhoto) return;
    withJob(j => {
      const e = { at: nowIso(), kind: 'note', text: S.note.trim(), by: whoAmI() };
      if (S.notePhoto) e.photo = addPhotoMeta(j, S.notePhoto, { kind: 'general', caption: S.note.trim().slice(0, 40) });
      j.timeline.push(e);
    });
    S.note = ''; S.notePhoto = null; render();
  },
  line: () => {
    const L = S.line, qty = num(L.qty);
    let price = S.role === 'mechanic' ? (L.kind === 'labour' ? Number(D.settings.labourRate) || 0 : 0) : (L.price === '' && L.kind === 'labour' ? Number(D.settings.labourRate) || 0 : num(L.price));
    if (!L.desc.trim() || !(qty > 0) || !(price >= 0)) { toast(t('need', { f: [t('desc'), t('qty'), t('price')].join(', ') })); return; }
    withJob(j => {
      const isRO = j.lines.some(l => l.state === 'approved');
      j.lines.push({ id: newId('l'), kind: L.kind, partId: null, desc: L.desc.trim(), qty: qty, price: price, cost: 0, state: 'proposed', stock: 'none', extra: isRO });
    });
    S.line = blankLine(); render();
  },
  lsearch: () => {
    const q = S.lineQ.trim().toLowerCase(); if (!q) return;
    const ps = partsHere();
    const exact = ps.find(p => String(p.barcode || '').toLowerCase() === q || String(p.sku || '').toLowerCase() === q);
    const hits = ps.filter(p => [p.name, p.sku, p.barcode].some(x => String(x || '').toLowerCase().indexOf(q) >= 0));
    if (exact) addPartLine(exact.id); else if (hits.length === 1) addPartLine(hits[0].id);
  },
  ssearch: () => {
    const q = S.stockQ.trim().toLowerCase(); if (!q) return;
    const ps = partsHere(), exact = ps.find(p => String(p.barcode || '').toLowerCase() === q || String(p.sku || '').toLowerCase() === q);
    const hits = stockList();
    if (exact) { S.stockQ = ''; go('part', exact.id); } else if (hits.length === 1) { S.stockQ = ''; go('part', hits[0].id); }
  },
  disc: () => {
    const pct = num(S.discPct !== '' ? S.discPct : 0);
    if (!(pct >= 0 && pct <= 100)) return;
    withJob(j => {
      const lim = Number(D.settings.discountLimit) || 0;
      j.discount = { pct: pct, status: pct === 0 ? 'none' : (S.role !== 'owner' && pct > lim ? 'pending' : 'applied'), at: nowIso() };
      if (j.discount.status === 'pending') toast(t('disc_pending', { p: pct }));
    });
    S.discPct = ''; render();
  },
  pay: () => {
    const j0 = D.jobs.get(S.id); if (!j0) return;
    const due = totals(j0).due, amt = r2(S.pay.amount !== '' ? num(S.pay.amount) : due);
    if (!(amt > 0)) return;
    withJob(j => { j.payments.push({ id: newId('pay'), method: S.pay.method, amount: amt, at: nowIso(), by: whoAmI() }); ev(j, 'paid', { amount: amt, method: S.pay.method }); });
    S.pay = { method: S.pay.method, amount: '' }; toast(t('saved')); render();
  },
  newjob: () => {
    const f = S.walk, miss = [];
    if (!f.brand && !f.model.trim()) miss.push(t('brand'));
    if (!f.service) miss.push(t('service'));
    if (!f.name.trim()) miss.push(t('name'));
    if (!f.now && (!f.date || !f.time)) miss.push(t('date'));
    if (miss.length) { S.err = t('need', { f: miss.join(', ') }); render(); return; }
    const now = nowIso(), d = new Date(), st = f.now ? 'received' : 'booked';
    const j = norm({ id: newId('j'), ref: newRef(), loc: curBranch(), createdAt: now, source: f.now ? 'walkin' : 'desk', service: f.service, vehicle: vehicleFrom(f), problem: f.problem.trim(),
      date: f.now ? ymd(d) : f.date, time: f.now ? pad(d.getHours()) + ':' + pad(d.getMinutes()) : f.time,
      customer: { name: f.name.trim(), phone: f.phone.trim(), line: f.line.trim() }, status: st, mechanic: f.mechanic || '',
      timeline: [{ at: now, kind: 'status', status: st, by: whoAmI() }] });
    if (f.photo) addPhotoMeta(j, f.photo, { kind: 'customer', stage: st });
    saveJ(j); S.walk = blankWalk(); S.err = ''; go('job', j.id);
  },
  part: () => {
    const P = S.partDraft; if (!P || !String(P.name || '').trim()) { toast(t('need', { f: t('part_name') })); return; }
    const isNew = !P.id, o = clone(P);
    o.name = o.name.trim(); o.cost = Math.max(0, num(o.cost) || 0); o.price = Math.max(0, num(o.price) || 0);
    o.reorderLevel = Math.max(0, parseInt(o.reorderLevel, 10) || 0); o.reorderQty = Math.max(1, parseInt(o.reorderQty, 10) || 1);
    o.onHand = Math.max(0, parseInt(o.onHand, 10) || 0); o.reserved = Number(o.reserved) || 0;
    if (isNew) { o.id = newId('p'); o.loc = curBranch(); }
    if (LIVE && !isNew) { const cur = D.parts.get(o.id) || {}; o.onHand = cur.onHand; o.reserved = cur.reserved; o.updatedAt = nowIso(); D.parts.set(o.id, o); dbWrite({ op: 'patch', table: 'parts', id: o.id, data: o }); }
    else put('parts', o);
    if (isNew && o.onHand > 0) stockMove(o, o.onHand, 'receive', null);
    S.partDraft = null; toast(t('saved'));
    if (isNew) go('part', o.id); else render();
  },
  recv: () => {
    const q = parseInt(S.recv.qty, 10); if (!(q > 0)) return;
    const c = num(S.recv.cost);
    let p = adjustStock(S.id, q, 0);
    if (p && c >= 0 && can('cost')) { p = Object.assign(clone(p), { cost: c }); if (LIVE) { D.parts.set(p.id, p); dbWrite({ op: 'patch', table: 'parts', id: p.id, data: { cost: c } }); } else put('parts', p); }
    if (p) stockMove(p, q, 'receive', null, { cost: Number(p.cost) || 0 });
    S.recv = { qty: '', cost: '' }; S.partDraft = null; toast(t('saved')); render();
  },
  count: () => {
    const n = parseInt(S.cnt, 10); if (!(n >= 0)) return;
    const p0 = D.parts.get(S.id); if (!p0) return;
    const diff = n - (Number(p0.onHand) || 0);
    const p = adjustStock(S.id, diff, 0);
    if (p && diff) stockMove(p, diff, 'adjust', null);
    S.cnt = ''; S.partDraft = null; toast(t('saved')); render();
  },
  expense: () => {
    const a = num(S.exp.amount); if (!(a > 0)) return;
    put('expenses', { id: newId('e'), at: nowIso(), cat: S.exp.cat, amount: a, note: S.exp.note.trim(), loc: curBranch() });
    S.exp = { cat: S.exp.cat, amount: '', note: '' }; toast(t('saved')); render();
  },
  settings: () => {
    const s = clone(S.setDraft);
    ['perSlot', 'labourRate', 'bigJob', 'discountLimit'].forEach(k => { s[k] = Math.max(0, num(s[k]) || 0); });
    s.perSlot = Math.max(1, Math.round(s.perSlot));
    s.open = Number(s.open); s.close = Math.max(s.open + 1, Number(s.close)); s.closedDay = Number(s.closedDay);
    Object.keys(s.prices || {}).forEach(k => { s.prices[k] = [Math.max(0, num(s.prices[k][0]) || 0), Math.max(0, num(s.prices[k][1]) || 0)]; });
    s.name = String(s.name || '').trim() || DEFAULTS.name;
    saveSettings(s).then(() => { if (!D.readonly) toast(t('saved')); });
    S.setDraft = clone(s); render();
  }
};

/* ================= events ================= */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el || el.tagName === 'SELECT' || el.disabled) return;
  const act = el.dataset.act, fn = A[act];
  if (!fn) return;
  e.preventDefault();
  if (D.readonly && READ_ACTS.indexOf(act) < 0) { toast(t('read_only')); return; }
  fn(el, e);
});
document.getElementById('overlay').addEventListener('click', e => { if (e.target.id === 'overlay') closeDlg(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.dlg) closeDlg(); });
const LIVE_SEARCH = { lineQ: () => { const r = document.getElementById('res-lineQ'); if (r) r.innerHTML = stockResults(S.lineQ); }, stockQ: () => { const r = document.getElementById('stock-body'); if (r) r.innerHTML = stockBody(); }, q: () => { const r = document.getElementById('board-body'); if (r) r.innerHTML = boardBody(); } };
document.addEventListener('input', e => {
  const el = e.target, b = el.dataset && el.dataset.bind;
  if (!b || el.type === 'checkbox' || el.tagName === 'SELECT') return;
  setPath(S, b, el.value);
  if (LIVE_SEARCH[b]) LIVE_SEARCH[b]();
  if (el.dataset.odoKm && S.dlg) { const btn = document.querySelector('[data-act="doodo"]'); if (btn) btn.disabled = !odoReady(S.dlg); }
});
document.addEventListener('change', e => {
  const el = e.target;
  if (el.dataset.act === 'setstatus') { if (D.readonly) return; withJob(j => setStatus(j, el.value)); return; }
  if (el.dataset.act === 'branch') { S.branch = el.value; lsSet('motoapp.branch', S.branch); render(); return; }
  if (el.dataset.task) { if (D.readonly) return; withJob(j => { const x = j.tasks.find(k => k.id === el.dataset.task); if (x) { x.done = el.checked; x.by = whoAmI(); } }); return; }
  if (el.dataset.staffrole) {
    const id = el.dataset.staffrole, role = el.value;
    sb.from('profiles').update({ role: role }).eq('id', id).then(({ error }) => { if (error) liveFailed(error); else { const pr = D.profiles.get(id); if (pr) D.profiles.set(id, Object.assign({}, pr, { role: role })); toast(t('saved')); render(); } });
    return;
  }
  if (el.dataset.price) { if (D.readonly) return; const v = num(el.value); if (v >= 0) withJob(j => { const l = j.lines.find(x => x.id === el.dataset.price); if (l) l.price = v; }); return; }
  const b = el.dataset.bind;
  if (b && el.type === 'checkbox') { setPath(S, b, el.checked); return; }
  if (b && el.tagName === 'SELECT') { setPath(S, b, el.dataset.num ? Number(el.value) : el.value); return; }
  const target = el.dataset.photoTarget;
  if (target === 'logo' && el.files && el.files[0]) { compress(el.files[0], 320, 'image/png').then(url => { if (S.setDraft) { S.setDraft.logo = url; render(); } }, () => toast(t('err_photo'))); return; }
  if (target && el.files && el.files[0]) {
    compress(el.files[0]).then(url => {
      if (target.indexOf('dlg.') === 0) { if (S.dlg) { S.dlg[target.slice(4)] = url; renderDialog(); } return; }
      if (target.indexOf('dvi:') === 0) { const key = target.slice(4); withJob(j => { const d = j.dvi.find(x => x.key === key); if (d) d.photo = addPhotoMeta(j, url, { kind: 'dvi', item: key }); }); return; }
      if (target === 'gen') { withJob(j => addPhotoMeta(j, url, { kind: 'general' })); return; }
      if (target === 'logo') return;
      setPath(S, target, url); render();
    }, () => toast(t('err_photo')));
  }
});
document.addEventListener('submit', e => {
  const f = e.target.getAttribute('data-form'); if (!f) return;
  e.preventDefault();
  if (D.readonly && ['auth', 'track', 'lsearch', 'ssearch', 'noop'].indexOf(f) < 0) { toast(t('read_only')); return; }
  const a = document.activeElement; if (a && a.blur && f !== 'lsearch' && f !== 'ssearch' && f !== 'chat') a.blur();
  if (FORMS[f]) FORMS[f](e.target);
});
function compress(file, maxSide, type) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = maxSide || 900, w = img.naturalWidth, h = img.naturalHeight, s = Math.min(1, max / Math.max(w, h));
        const c = document.createElement('canvas'); c.width = Math.round(w * s); c.height = Math.round(h * s);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        res(type === 'image/png' ? c.toDataURL('image/png') : c.toDataURL('image/jpeg', 0.66));
      };
      img.onerror = rej; img.src = fr.result;
    };
    fr.onerror = rej; fr.readAsDataURL(file);
  });
}

/* ================= boot ================= */
function start(saved) {
  saved = saved || {};
  lang = saved.lang || lsGet('motoapp.lang') || ((navigator.language || '').toLowerCase().indexOf('th') === 0 ? 'th' : 'en');
  const r = saved.role || lsGet('motoapp.role'); if (ROLES.indexOf(r) >= 0) S.role = r;
  S.me = saved.me || lsGet('motoapp.me') || '';
  S.branch = lsGet('motoapp.branch') || '';
  if (saved.form) S.form = Object.assign(blankForm(), saved.form);
  if (saved.walk) S.walk = Object.assign(blankWalk(), saved.walk);
  ['trackQ', 'trackDone', 'trackPick', 'bookedId', 'boardMode', 'period', 'stockF', 'tab'].forEach(k => { if (saved[k] != null) S[k] = saved[k]; });
  if (!S.trackQ) { const last = lsGet('motoapp.lastRef'); if (last) { S.trackQ = last; S.trackDone = last; } }
  if (LIVE) { S.trackCode = lsGet('motoapp.lastRef') || ''; S.trackPhone = lsGet('motoapp.lastPhone') || ''; }
  const keepTab = S.tab;
  readHash();
  if (keepTab) S.tab = keepTab;
  render();
  connect();
}
const hot = window.claude && window.claude.hot;
if (hot && typeof hot.snapshot === 'function') {
  hot.snapshot(() => ({ lang: lang, role: S.role, me: S.me, form: Object.assign({}, S.form, { photo: null }), walk: Object.assign({}, S.walk, { photo: null }),
    trackQ: S.trackQ, trackDone: S.trackDone, trackPick: S.trackPick, bookedId: S.bookedId, boardMode: S.boardMode, period: S.period, stockF: S.stockF, tab: S.tab }));
}
if (hot && typeof hot.ready === 'function') hot.ready(start); else start((hot && hot.data) || {});
})();
