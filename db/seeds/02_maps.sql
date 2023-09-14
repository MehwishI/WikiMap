-- Assuming your table is named "locations"

INSERT INTO users (id, name, email) VALUES (1, 'jeremy', 'blah@blah.com');

INSERT INTO maps ( id, user_id, uid, title ) Values (1, 1, 1, 'mymap');

-- Inserting data for Central Park
INSERT INTO locations (id, title, description, map_id, longitude, latitude, created_at, updated_at)
VALUES (1, 'Central Park', 'A large park in New York City', 1, -73.970002, 40.785091, '2023-09-14 09:00:00', '2023-09-14 09:00:00');

-- Inserting data for Statue of Liberty
INSERT INTO locations (id, title, description, map_id, longitude, latitude, created_at, updated_at)
VALUES (2, 'Statue of Liberty', 'Iconic statue in New York Bay', 1, -74.044502, 40.689247, '2023-09-14 09:15:00', '2023-09-14 09:15:00');

-- Inserting data for Golden Gate Park
INSERT INTO locations (id, title, description, map_id, longitude, latitude, created_at, updated_at)
VALUES (3, 'Golden Gate Park', 'A famous park in San Francisco', 1, -122.489017, 37.769420, '2023-09-14 09:30:00', '2023-09-14 09:30:00');

-- Inserting data for Eiffel Tower
INSERT INTO locations (id, title, description, map_id, longitude, latitude, created_at, updated_at)
VALUES (4, 'Eiffel Tower', 'Iconic landmark in Paris', 1, 2.294694, 48.858844, '2023-09-14 09:45:00', '2023-09-14 09:45:00');

-- Inserting data for Sydney Opera House
INSERT INTO locations (id, title, description, map_id, longitude, latitude, created_at, updated_at)
VALUES (5, 'Sydney Opera House', 'World-famous performing arts', 1, 151.214818, -33.856784, '2023-09-14 10:00:00', '2023-09-14 10:00:00');
