CREATE TABLE public.cities
(
    id integer NOT NULL DEFAULT nextval('cities_id_seq'::regclass),
    city character(20) COLLATE pg_catalog."default",
    state character(20) COLLATE pg_catalog."default",
    CONSTRAINT cities_pkey PRIMARY KEY (id)
);

CREATE TABLE public.customer
(
    cno integer NOT NULL DEFAULT nextval('customer_cno_seq'::regclass),
    cname character(50) COLLATE pg_catalog."default",
    addr character varying(50) COLLATE pg_catalog."default",
    cu_city character(20) COLLATE pg_catalog."default",
    CONSTRAINT customer_pkey PRIMARY KEY (cno)
);

CREATE TABLE public.items
(
    item_no integer NOT NULL DEFAULT nextval('items_item_no_seq'::regclass),
    item character varying(50) COLLATE pg_catalog."default",
    store_id integer,
    description text COLLATE pg_catalog."default",
    weight numeric(5,2),
    cost numeric(5,2),
    CONSTRAINT items_pkey PRIMARY KEY (item_no)
);


CREATE TABLE public.items_orders
(
    item_no integer NOT NULL,
    order_no integer NOT NULL,
    CONSTRAINT items_orders_pkey PRIMARY KEY (item_no, order_no),
    CONSTRAINT fk_item FOREIGN KEY (item_no)
        REFERENCES public.items (item_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_order FOREIGN KEY (order_no)
        REFERENCES public.orders (order_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);


CREATE TABLE public.orders
(
    order_no integer NOT NULL DEFAULT nextval('orders_order_no_seq'::regclass),
    customer_no integer,
    item_no integer,
    order_date timestamp without time zone,
    CONSTRAINT orders_pkey PRIMARY KEY (order_no),
    CONSTRAINT fk_customer FOREIGN KEY (customer_no)
        REFERENCES public.customer (cno) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE public.stores
(
    sid integer NOT NULL DEFAULT nextval('stores_sid_seq'::regclass),
    store_name character(20) COLLATE pg_catalog."default",
    location_city character(20) COLLATE pg_catalog."default",
    w_id integer,
    CONSTRAINT stores_pkey PRIMARY KEY (sid),
    CONSTRAINT fk_wid FOREIGN KEY (w_id)
        REFERENCES public.warehouse (wid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE public.stores_items
(
    store_id integer NOT NULL,
    item_id integer NOT NULL,
    CONSTRAINT stores_items_pkey PRIMARY KEY (store_id, item_id),
    CONSTRAINT fk_item FOREIGN KEY (item_id)
        REFERENCES public.items (item_no) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_store FOREIGN KEY (store_id)
        REFERENCES public.stores (sid) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE public.warehouse
(
    wid integer NOT NULL DEFAULT nextval('warehouse_wid_seq'::regclass),
    wname character(30) COLLATE pg_catalog."default",
    city_id integer,
    extra_content json,
    CONSTRAINT warehouse_pkey PRIMARY KEY (wid),
    CONSTRAINT fk_cityid FOREIGN KEY (city_id)
        REFERENCES public.cities (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);
