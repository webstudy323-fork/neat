export const STRIPE_PRESET = {
    speed: 4,
    colors: [
        {
            color: "#FF5373",
            enabled: true,
        }, {
            color: "#FFC858",
            enabled: true,
        }, {
            color: "#17E7FF",
            enabled: true,
        }, {
            color: "#6D3BFF",
            enabled: true,
        }, {
            color: "#f5e1e5",
            enabled: false,
        },
    ],
    colorBlending: 6,
    horizontalPressure: 3,
    verticalPressure: 3,
    shadows: 0,
    highlights: 2,
    saturation: 3,
    waveFrequencyX: 2,
    waveFrequencyY: 4,
    waveAmplitude: 5,
    wireframe: false,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1.0,
};

export const PASTEL_PRESET = {
    speed: 4,
    colors: [
        {
            color: "#cdb4db",
            enabled: true,
        }, {
            color: "#ffc8dd",
            enabled: true,
        }, {
            color: "#ffafcc",
            enabled: true,
        }, {
            color: "#bde0fe",
            enabled: true,
        }, {
            color: "#a2d2ff",
            enabled: false,
        },
    ],
    colorBlending: 5,
    horizontalPressure: 3,
    verticalPressure: 3,
    shadows: 0,
    highlights: 2,
    saturation: 3,
    waveFrequencyX: 2,
    waveFrequencyY: 4,
    waveAmplitude: 5,
    wireframe: false,
    backgroundColor: "#003FFF",
    backgroundAlpha: 1.0,
};

export const CLOUDS_PRESET = {
    "colors": [
        { color: '#FFFFFF', enabled: true },
        { color: '#FDBF7B', enabled: true },
        { color: '#FBECC1', enabled: true },
        { color: '#E4E4E4', enabled: true },
        { color: '#7BEFF7', enabled: true }
    ],
    "speed": 4,
    "horizontalPressure": 3,
    "verticalPressure": 2,
    "waveFrequencyX": 4,
    "waveFrequencyY": 4,
    "waveAmplitude": 3,
    "shadows": 7,
    "highlights": 6,
    "saturation": 3,
    "wireframe": false,
    "colorBlending": 7,
    "backgroundColor": "#0b3954",
    "backgroundAlpha": 1
};

export const WE_THE_ROOT_PRESET = {
    speed: 4,
    colors: [
        {
            color: "#FFFFFF",
            enabled: true,
        }, {
            color: "#FFFFFF",
            enabled: true,
        }, {
            color: "#C4C3FF",
            enabled: true,
        }, {
            color: "#FFE8A7",
            enabled: true,
        }, {
            color: "#f5e1e5",
            enabled: false,
        },
    ],
    colorBlending: 7,
    horizontalPressure: 3,
    verticalPressure: 3,
    shadows: 0,
    highlights: 2,
    saturation: 3,
    waveFrequencyX: 4,
    waveFrequencyY: 4,
    waveAmplitude: 3,
    wireframe: false,
    backgroundColor: "#0b3954",
    backgroundAlpha: 1.0,
};

export const PRUSSIAN_BLUE_PRESET = {
    speed: 4,
    colors: [
        {
            color: "#0b3954",
            enabled: true,
        }, {
            color: "#087e8b",
            enabled: true,
        }, {
            color: "#bfd7ea",
            enabled: true,
        }, {
            color: "#ff5a5f",
            enabled: true,
        }, {
            color: "#c81d25",
            enabled: true,
        },
    ],

    colorBlending: 10,
    horizontalPressure: 3,
    verticalPressure: 3,
    shadows: 2,
    highlights: 7,
    saturation: 8,
    waveFrequencyX: 2,
    waveFrequencyY: 6,
    waveAmplitude: 8,
    wireframe: false,
    backgroundColor: "#FF0000",
    backgroundAlpha: 1.0,
};

export const PSYCHEDELIC_PRESET = {
    ...STRIPE_PRESET,
    "colors": [{
        "color": "#00C5FF",
        "enabled": true
    }, { "color": "#CEFF00", "enabled": true }, {
        "color": "#17E7FF",
        "enabled": true
    }, { "color": "#6D3BFF", "enabled": true }, {
        "color": "#FFFB00",
        "enabled": true
    }],
    "speed": 4,
    "horizontalPressure": 7,
    "verticalPressure": 7
};
//e6eed6-dde2c6-bbc5aa-a72608-090c02
export const BEIGE_PRESET = {

    "colors": [{
        "color": "#FFB6B6",
        "enabled": true
    }, {
        "color": "#dde2c6",
        "enabled": true
    }, {
        "color": "#bbc5aa",
        "enabled": true
    }, {
        "color": "#a72608",
        "enabled": true
    }, {
        "color": "#e6eed6",
        "enabled": true
    }],
    "speed": 4,
    "horizontalPressure": 1,
    "verticalPressure": 1,
    "waveFrequencyX": 3,
    "waveFrequencyY": 4,
    "waveAmplitude": 5,
    "shadows": 0,
    "highlights": 10,
    "saturation": -1,
    "wireframe": false,
    "colorBlending": 2,
    "backgroundColor": "#FFFFFF",
    "backgroundAlpha": 1
};
export const SPLASH_PRESET = {
    "colors": [{
        "color": "#ffbe0b",
        "enabled": true
    }, {
        "color": "#fb5607",
        "enabled": true
    }, {
        "color": "#ff006e",
        "enabled": true
    }, {
        "color": "#8338ec",
        "enabled": true
    }, {
        "color": "#3a86ff",
        "enabled": true
    }],
    "speed": 4,
    "horizontalPressure": 1,
    "verticalPressure": 1,
    "waveFrequencyX": 1,
    "waveFrequencyY": 2,
    "waveAmplitude": 7,
    "shadows": 4,
    "highlights": 5,
    "saturation": 2,
    "wireframe": false,
    "colorBlending": 5,
    "backgroundColor": "#FFBE0B",
    "backgroundAlpha": 1
};

export const PRESETS = {
    "Stripe": STRIPE_PRESET,
    "Prussian": PRUSSIAN_BLUE_PRESET,
    "We the root": WE_THE_ROOT_PRESET,
    "Clouds": CLOUDS_PRESET,
    "Psychedelic": PSYCHEDELIC_PRESET,
    "Beige": BEIGE_PRESET,
    "Splash": SPLASH_PRESET,
    "Pastel": PASTEL_PRESET,
}