interface PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

interface Height {
    meters: number;
    feet: number;
}

interface Diameter {
    meters: number;
    feet: number;
}

interface Thrust {
    kN: number;
    lbf: number;
}

interface Engines {
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    thrust_to_weight: number;
}

interface FirstStage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
}

interface Payloads {
    option_1: string;
    composite_fairing?: {
        height: Height;
        diameter: Diameter;
    };
}

interface SecondStage {
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust: Thrust;
    payloads: Payloads;
}

interface LandingLegs {
    number: number;
    material: string;
}

export interface Rocket {
    id: number;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: string;
    country: string;
    company: string;
    height: Height;
    diameter: Diameter;
    mass: {
        kg: number;
        lb: number;
    };
    payload_weights: PayloadWeight[];
    first_stage: FirstStage;
    second_stage: SecondStage;
    engines: Engines;
    landing_legs: LandingLegs;
    wikipedia: string;
    description: string;
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    flickr_images: string[];
    name: string;
    type: string;
}