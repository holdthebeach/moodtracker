
    var data = [{x: 40, "r": 3}, {x: 90, "r": 4}, {x: 150, "r": 3}];
    var svgContainer = d3.select('#header').append('svg')
            .attr('width', 200)
            .attr('height', 120),
        circles = svgContainer.selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d,i) { return d.x;})
            .attr('cy', 60)
            .attr('r', function (d) { return d.r*10;})
            .attr('fill', 'pink');

    var width = 125,
        height = 120,
        r = 7,
        p = Math.PI *2;

    var container = d3.select('#happinessScale').append('div')
            .attr('class', 'rangeContainer')
            .append('svg')
            .attr('height', height)
            .attr('width', width),
        /*head = container
            .append('circle')
            .attr('cx', 100 )
            .attr('cy', 100 )
            .attr('r', 50 )
            .attr('fill', 'yellow')
            .attr('class', 'smileHead'),
        arc = d3.svg.arc()
            .innerRadius(r-2)
            .outerRadius(r)
            .startAngle(1.5)
            .endAngle(p-1.5),
        smile = container.append('g')
            .attr('transform', 'translate(100, 100)')
            .append('path')
            .attr('fill', 'black')
            .attr('class', 'smileMouth')
            .attr('d', arc),
        eye1 =  container.append('circle')
            .attr('cx', 95 )
            .attr('cy', 95 )
            .attr('r', 5 )
            .attr('fill', 'black')
            .attr('class', 'eye'),
        eye2 =  container.append('circle')
            .attr('cx', 105 )
            .attr('cy', 95 )
            .attr('r', 5 )
            .attr('fill', 'black')
            .attr('class', 'eye');*/
        smile = container.append('path')
            .attr('class', 'smile')
            .attr('display', 'none')
            .attr('d', 'M90.544,90.542c20.687-20.685,20.685-54.342,0.002-75.024C69.858-5.172,36.199-5.172,15.515,15.513 C-5.173,36.198-5.171,69.858,15.517,90.547C36.199,111.23,69.858,111.23,90.544,90.542z M21.302,21.3C38.796,3.807,67.261,3.805,84.759,21.302c17.494,17.494,17.492,45.962-0.002,63.455c-17.494,17.494-45.96,17.496-63.455,0.002 C3.804,67.263,3.806,38.794,21.302,21.3z M58.857,41.671c0-4.798,3.903-8.701,8.703-8.701c4.797,0,8.7,3.902,8.7,8.701c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.7-3.701c-2.042,0-3.703,1.66-3.703,3.701c0,1.381-1.119,2.5-2.5,2.5C59.976,44.171,58.857,43.051,58.857,41.671z M31.134,41.644c0-4.797,3.904-8.701,8.703-8.701c4.797,0,8.701,3.903,8.701,8.701c0,1.381-1.119,2.5-2.5,2.5c-1.381,0-2.5-1.119-2.5-2.5c0-2.041-1.66-3.701-3.701-3.701c-2.042,0-3.703,1.66-3.703,3.701c0,1.381-1.119,2.5-2.5,2.5S31.134,43.024,31.134,41.644z M30.025,63.994c-0.636-1.529,0.089-3.285,1.62-3.921c0.376-0.155,0.766-0.229,1.15-0.229c1.176,0,2.292,0.695,2.771,1.85c2.777,6.686,9.655,11.004,17.523,11.004c7.69,0,14.528-4.321,17.42-11.011c0.658-1.521,2.424-2.222,3.944-1.563s2.22,2.424,1.562,3.944c-3.843,8.887-12.843,14.629-22.927,14.629C42.788,78.697,33.735,72.927,30.025,63.994z');
        sad = container.append('path')
            .attr('class', 'sad')
            .attr('display', 'none')
            .attr('d', 'M90.546,15.518C69.858-5.172,36.199-5.172,15.515,15.513C-5.173,36.198-5.171,69.858,15.517,90.547c20.682,20.684,54.341,20.684,75.027-0.004C111.23,69.858,111.229,36.2,90.546,15.518z M84.757,84.758c-17.494,17.494-45.96,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.796,3.807,67.261,3.805,84.759,21.302C102.253,38.796,102.251,67.265,84.757,84.758z M77.017,74.001c0.658,1.521-0.042,3.286-1.562,3.943c-1.521,0.66-3.286-0.042-3.944-1.562c-2.893-6.689-9.73-11.012-17.421-11.012c-7.868,0-14.747,4.319-17.522,11.004c-0.479,1.154-1.596,1.851-2.771,1.851c-0.384,0-0.773-0.074-1.15-0.23c-1.53-0.636-2.255-2.392-1.62-3.921c3.71-8.932,12.764-14.703,23.063-14.703C64.174,59.371,73.174,65.113,77.017,74.001z M33.24,38.671c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.777,6.202-6.2,6.202C36.017,44.873,33.24,42.097,33.24,38.671z M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.776,6.202-6.2,6.202S61.357,42.097,61.357,38.671z');
        cat = container.append('path')
            .attr('class', 'cat')
            .attr('display', 'none')
            .attr('d', 'M30,108.785c9,4.601,19.1,7,29.2,7.2c0.5,0,1.1,0,1.6,0c10.2,0,20.3-2.2,29.5-6.6c8.399-4,16-10,21.601-17.5c6.399-8.601,9.699-18.9,9.699-29.601c0-6.8,0-13.5,0-20.3c0-7.4,0-14.7,0-22.1c0-2.6,0-5.2,0-7.7c0-4.7-4.699-7.8-9-6.1l-22.8,9.5c-1.5,0.6-3.2,0.7-4.7,0.1c-7.4-2.9-15.6-4.4-24.3-4.4s-16.9,1.6-24.3,4.4c-1.5,0.6-3.2,0.5-4.7-0.1L9,6.385c-4.3-1.8-9,1.4-9,6.1c0,3.5,0,7.1,0,10.6c0,7.3,0,14.6,0,22c0,6.2,0,12.3,0,18.5c0,9.9,3.2,19.5,8.9,27.5C14.3,98.585,21.7,104.585,30,108.785zM83,62.485c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10C73,66.886,77.5,62.485,83,62.485z M38.6,62.485c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10C28.6,66.886,33.1,62.485,38.6,62.485z');

    update(5);

    d3.select('#slider').on('input', function(){
       update(+this.value); 
    });

    function update(sliderValue){
        if (sliderValue > 6){
            d3.select('.smile')
                .attr('display', 'block');
            d3.select('.cat')
                .attr('display', 'none');
            d3.select('.sad')
                .attr('display', 'none');
        }else if (sliderValue < 4){
            d3.select('.smile')
                .attr('display', 'none');
            d3.select('.cat')
                .attr('display', 'none');
            d3.select('.sad')
                .attr('display', 'block');
        }else{
            d3.select('.smile')
                .attr('display', 'none');
            d3.select('.cat')
                .attr('display', 'block');
            d3.select('.sad')
                .attr('display', 'none');
        }
        /*    
        var val = sliderValue * 10;
        var eyeStartX = 0;
        var eyeStartY= 0;
        container.select('.smileHead')
            .attr('r', val);
        container.select('.smileMouth')
            .attr('transform', 'scale('+(sliderValue/2)+')');
        container.selectAll('.eye')
            .attr('r', sliderValue)
            .attr('transform', 'translate('+(eyeStartX+sliderValue)+','+(eyeStartY-sliderValue)+')');*/
    };