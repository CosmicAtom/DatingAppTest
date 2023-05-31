import { Photo } from "./photo";

export interface members {
    id:           number;
    username:     string;
    photUrl:      string;
    age:          number;
    knownAs:      string;
    created:      Date;
    lastActive:   Date;
    gender:       string;
    email:        string;
    introduction: string;
    lookingFor:   string;
    interests:    string;
    city:         string;
    country:      string;
    photos:       Photo[];
}

