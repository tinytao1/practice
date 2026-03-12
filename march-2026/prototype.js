'use strict'

const itemMethods = {   

  init() { // call to activate >> item#.init();
    this.button.addEventListener('click', () => this.select()); },

  add_1() {
    this.count++;
    this.section.count++;
  },

  set_item_selected_to_true(){
    this.selected = true;
  },

  set_item_selected_to_false(){
    this.selected = false;
  },

  style_item_counter_to_empty(){ // text invisible & no border
    this.counter.style.color = "white";
    //this.counter.style.backgroundColor = "rgb(233,233,237)";
    //this.counter.style.border = "none";
  },

  style_item_counter_to_selected() {   // text-visible & background green #beecc7 
    this.counter.style.color = "black";
    //this.counter.style.border = "1px solid #bffabb"; 
    //this.counter.style.backgroundColor = "#e9fce8"; //green
   }, 

  style_all_selected_item_counters_to_empty(){ // No border, and text invisible.
    this.section.counter.style.color = "white";
    //s1.counter.style.backgroundColor = "rgb(233,233,237)";
    //s1.counter.style.border = "none";
  },

  display_item_count_on_page() { this.counter.innerHTML = this.count; },

  //display_section_count_on_page() { s1.counter.innerHTML = s1.count; },



  disable_unselected_item_buttons() {
    this.section.items.forEach(item => {
      if (!item.selected) { item.button.disabled = true; }
    } );
  },


  enable_unselected_item_buttons() {
    this.section.items.forEach(item => {
      if (!item.selected && item.button) { item.button.disabled = false; }
    } );
  },

  set_item_count_to_zero(){this.count = 0;},

  set_section_count_to_zero() { this.section.count = 0; },

  set_item_selected_to_false(){this.selected = false;},

  activate_all_item_buttons_in_section() {
    this.section.items.forEach(item => {
      item.button.disabled = false; 
    } );
  },

  log_item_status(){console.log(this.name + " count is " + this.count + 
  ", selected " + this.selected + ".");},

  log_section_count(){console.log(this.section.name + " count is: " +
  this.section.count);},

  set_section_limit_reached_to_true() {this.section.limit_reached = true;},

  set_section_limit_reached_to_false() {this.section.limit_reached = false;},
  
  select_item_from_zero() {
    this.add_1();
    this.set_item_selected_to_true();
    this.log_item_status();
    this.log_section_count();
    this.style_item_counter_to_selected();
    //this.style_section_counter_to_selected();
    this.display_item_count_on_page();
    //this.display_section_count_on_page();

    if (this.section.count == this.section.limit) {
      this.set_section_limit_reached_to_true();
      //this.style_item_counter_to_limit_reached();
      //this.style_section_counter_to_limit_reached();
      this.disable_unselected_item_buttons();
      this.log_section_status();
      //this.style_all_selected_item_counters_to_limit_reached();
    }
  },

  log_section_status(){ 
    console.log(this.section.name + " count is " + this.section.count + 
    ", limit reached " + this.section.limit_reached );
  },
  
  remove_item_from_section_count() {
    this.section.count = this.section.count - this.count;
  },
  
  display_all_section_counts(){
    //s1.counter.innerHTML = s1.count;
    this.section.items.forEach(item => {
      item.counter.innerHTML = item.count;
    });
  },

  drop_item_from_section(){
    this.remove_item_from_section_count();
    this.set_section_limit_reached_to_false();
    this.log_section_status();
    this.set_item_count_to_zero();
    this.set_item_selected_to_false();
    this.log_item_status();
    this.enable_unselected_item_buttons();
    this.style_item_counter_to_empty();
    //this.style_all_selected_item_counters_to_selected();
    //this.style_section_counter_to_selected();
    /*if (s1.count == 0) {
      this.style_section_counter_to_empty();
    } else {this.style_section_counter_to_selected();}
    */
  },

  select_item_from_section_while_limit_reached(){
    if (this.section.limit_reached) {
      this.drop_item_from_section(); // enable buttons / 
      this.display_all_section_counts();
      //this.style_item_counters : 0, selected, or at limit
    }
  },

  select(){
    if (this.section.limit_reached) {
      this.select_item_from_section_while_limit_reached();
    } else {
      this.select_item_from_zero();
    }
  },

////////////// BEGIN RESET METHODS  /////////////////////////////////////

  log_section_status(){ 
    console.log(this.section.name + " count is " + this.section.count +
    ", limit reached " + this.section.limit_reached );
  },

  log_all_items_status() { 
    if (item1.count + item2.count + item3.count + item4.count == 0) {
      console.log("All item counts are 0");
    } else {
        this.section.items.forEach(item => {
          console.log(item.name + " count is " + item.count);
        } 
        );
    }
    if (!item1.selected && !item2.selected && !item3.selected && !item4.selected) {
      console.log("All item selecteds are false");
    } else {
        this.section.items.forEach(item => {
          console.log(item.name + " selected " + item.selected);
        } 
        );
    }
  },

  set_section_count_to_zero(){
    this.section.count = 0;
  },

  set_all_item_counts_to_zero(){
    this.section.items.forEach(item => {
      item.count = 0;
    })
  },

  set_section_limit_reached_to_false(){ 
    this.section.limit_reached = false;
  },

  set_all_item_selecteds_to_false(){
    this.section.items.forEach(item => {
      item.selected = false;
    })
  },

  style_section_counter_to_empty() { // text invisible & no border
    this.section.counter.style.backgroundColor = "rgb(233,233,237)";
    this.section.counter.style.color = "rgb(233,233,237)"; 
    this.section.counter.style.border = "none";
    this.section.counter.innerHTML = this.section.count;
   },

  style_all_item_counters_to_empty(){
    this.section.items.forEach(item => {
      //item.counter.style.backgroundColor = "rgb(233,233,237)";
      item.counter.style.color = "white"; 
      //item.counter.style.border = "none";
      item.counter.innerHTML = item.count;
    });
  },

  enable_all_item_buttons(){
    this.section.items.forEach(item => {
      item.button.disabled = false;
    });
  },

  reset_section() {
    this.set_section_count_to_zero();
    this.set_section_limit_reached_to_false();
    this.log_section_status();
    //this.style_section_counter_to_empty(); 
    this.enable_all_item_buttons();

    this.set_all_item_counts_to_zero();
    this.set_all_item_selecteds_to_false();
    this.log_all_items_status();
    this.style_all_item_counters_to_empty();    
  },

};