var nodesjs = new NodesJs({
    // container ID
    id: 'nodes',
    // width
    width: window.innerWidth,
    // height
    height: window.innerHeight,
    // background transition options
    backgroundFrom: [10, 25, 100],
    backgroundTo: [25, 50, 150],
    backgroundDuration: 4000,
    // the number of particles
    number: window.hasOwnProperty('orientation') ? 30: 100,
    // animation speed
    speed: 20
});