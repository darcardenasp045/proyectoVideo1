export type NasaType = {
    id:         number;
    sol:        number;
    camera:     NasaTypeCamera;
    img_src:    string;
    earth_date: Date;
    rover:      Rover;
}

export type NasaTypeCamera = {
    id:        number;
    name:      string;
    rover_id:  number;
    full_name: string;
}

export type Rover = {
    id:           number;
    name:         string;
    landing_date: Date;
    launch_date:  Date;
    status:       string;
    max_sol:      number;
    max_date:     Date;
    total_photos: number;
    cameras:      CameraElement[];
}

export type CameraElement = {
    name:      string;
    full_name: string;
}
