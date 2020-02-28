module.exports = function () {
  return `
    <div>
        <div id="map_container">
            <div id="search_box_input">
                <form class="overlay"id="search_form_f_map" autocomplete="on">
                    <input onfocus="this.placeholder = ''" onblur="this.placeholder='Address, Neighborhood, City, County'" type="text" name="" id="search_i_map" placeholder="Address, Neighborhood, City, County">
                    <button target="_self" id="search_b_map">Search</button>
                </form>
            </div>
            <div id="search_box_results">
            </div>
            <div class="mapbox"id="map" style="width: 100%; height: 94vh;"></div>
            <div id="slider_container_div_m">
                <label id="slider_l_m">Slide to Hide Rentals</label>
                <label class="switch_m">
                  <input type="checkbox" id="checkbox">
                  <span class="slider round"></span>
                </label>
              </div>
        </div>
        

        
    </div>
    
    
    <script src="../js/map.js"></script>
</body>

</html>
    `;
};

{ /* <script src="../js/map.js"></script> */ }
{/* <div class="mapbox"id="map" style="width: 100%; height: 100vh;"></div> */ }