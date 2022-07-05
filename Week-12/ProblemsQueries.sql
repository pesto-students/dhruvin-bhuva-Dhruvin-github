Problem 1 : 
select MIN(weight) as weight from items;


Problem 2:
select wname from warehouse where city_id = (select id from cities where city='pune');


Problem 3:
select * from items i
inner join orders o on o.item_no = i.item_no
where o.customer_no = (select cno from customer where cname = 'Mr. Patil');


Problem 4:
with cte as(
select count(1),w_id from stores group by w_id )
select wname from warehouse where wid = (select w_id from cte where count = (select max(count) from cte));


Problem 5:
with cte as(
select MIN(item_no),item_no from orders group by item_no)
select item from items where item_no = (select item_no from cte);


	
Problem 6:
select * from orders;
