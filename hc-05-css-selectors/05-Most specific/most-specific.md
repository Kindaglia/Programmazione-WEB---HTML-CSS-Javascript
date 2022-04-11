
* ul li {}    
2 elements  
total: 2

* ul > li {}  
2 elements  
total: 2


* body > #main.mobile a:hover {}  
1 id  
1 class and 1 pseudo-class  
2 elements  
total: 5  


* div p > span {}  
3 elements  
total: 3


* .users .name {}  
2 classes  
total: 2

* [href$='.pdf'] {}  
1 attribute  
total: 1  

* :hover {}  
1 pseudo-class  
total: 1  

* div .name {}  
1 element  
1 class  
total: 2

* a[href$='.pdf'] {}  
1 attribute  
1 element  
total: 2 


* .pictures img:hover {}  
1 class and 1 pseudo-class  
1 element  
total 3  

* .name.name.name {}  
3 classes  
total: 3

* .user #name {}  
1 id  
1 class 
total: 2  

* #name span {}  
1 id  
1 element 
total: 2   

* nav#nav > li:hover {}  
1 id  
1 pseudo-class  
2 elements  
total: 4  

* li:nth-child(2n+1):hover {}   
2 pseudo-classes  
1 element  
total: 3  


## Authors

* **Matteo Drago** 
