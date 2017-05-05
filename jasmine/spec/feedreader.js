// feedreader.js

// This test suites specification will test app.js

$(function() {
 

    var totalFeedLength =  allFeeds.length;

    
    // Will test RSS feeds definitions and variables
    describe('RSS Feeds', function() {


        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(totalFeedLength).not.toBe(0);
        });


        // Test makes sure there is a URL defined and is not empty
         it('URL defined and not empty',function(){
            for(var i=0; i< totalFeedLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });


         // Test makes sure tehere is a name defined and that the name is not empty
         it('Name is defined and not empty',function(){
            for(var i=0 ; i<totalFeedLength; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }

         });
    });

    // Will test Menu functionality 
    describe('The menu',function(){
        
       
         // Test checks if element hidden by default
         it('Menu hidden by default',function(){
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });

         //Test checks if element's visibility changes when clicked

         it('Menu changes visibility when menu is clicked',function(){
            //Checks if menu opens
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            //Checks if menu closes when clicked again
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
         });


    });

     // Test suite checks for initial entries  
    describe('Initial Entries',function(){

        beforeEach(function(done){
            loadFeed(0,done);
        });

        /*ensures when the loadFeed function is called and completes its work, there is at least
         a single .entry element within the .feed container */

        it('Should have at least a single .entry element within the .feed container',function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    // Test suite for new feed selection
    describe('New Feed Selection',function(){

        /* Write a test that ensures when a new feed is loaded
         by the loadFeed function that the content actually changes.
        var entry1,entry2 */

        beforeEach(function(done){
            loadFeed(1,function(){
                result1 = $(".feed").html();
                done();
            });

        });

        it('New feed is loaded',function(done){
            loadFeed(0,function(){
                result2= $(".feed").html();
                expect(result1).not.toEqual(result2);
                done();
            });

        });

    });

}());
