import React from "react";
import {
  ChipIcon,
  SoundIcon,
  AudioIcon,
  EqualizerIcon,
  MicIcon,
  NoneIcon,
  ClockIcon,
  WaterIcon,
  TouchIcon,
  EarIcon
} from "../components/Compare/icons";

// Import product images
import beigeImg from "../assets/images/beige.png";
import flowImg from "../assets/images/Flow-II.png";

/**
 * Product data for comparison page
 * Contains all features and specifications for each product
 */

export const products = {
  auraPro: {
    id: "aura-pro-ii",
    name: "Aura Pro II",
    image: beigeImg,
    price: "$320",
    features: [
      { 
        icon: <ChipIcon />, 
        label: "R1 Chip",
        disabled: false
      },
      { 
        icon: <SoundIcon />, 
        label: "2x more Active Noise Cancellation",
        disabled: false
      },
      { 
        icon: <AudioIcon />, 
        label: "Personalized Spatial Audio",
        disabled: false
      },
      { 
        icon: <EqualizerIcon />, 
        label: "Lossless Audio",
        disabled: false
      },
      { 
        icon: <NoneIcon />, 
        label: "None", 
        disabled: true 
      },
      { 
        icon: <NoneIcon />, 
        label: "None", 
        disabled: true 
      },
      { 
        icon: <ClockIcon />, 
        label: "Up to 17 hours of listening",
        disabled: false
      },
      { 
        icon: <NoneIcon />, 
        label: "None", 
        disabled: true 
      },
      { 
        icon: <MicIcon />, 
        label: "5 microphones total",
        disabled: false
      }
    ]
  },

  flowII: {
    id: "flow-ii",
    name: "Flow II",
    image: flowImg,
    price: "$160",
    features: [
      { 
        icon: <ChipIcon />, 
        label: "R2 Chip",
        disabled: false
      },
      { 
        icon: <SoundIcon />, 
        label: "Active Noise Cancellation",
        disabled: false
      },
      { 
        icon: <AudioIcon />, 
        label: "Personalized Spatial Audio",
        disabled: false
      },
      { 
        icon: <NoneIcon />, 
        label: "None", 
        disabled: true 
      },
      { 
        icon: <EarIcon />, 
        label: "Hearing Test and Hearing Protection",
        disabled: false
      },
      { 
        icon: <TouchIcon />, 
        label: "Touch sensor",
        disabled: false
      },
      { 
        icon: <ClockIcon />, 
        label: "Up to 6 hours of listening",
        disabled: false
      },
      { 
        icon: <WaterIcon />, 
        label: "Water resistant",
        disabled: false
      },
      { 
        icon: <MicIcon />, 
        label: "Dual beamforming microphones",
        disabled: false
      }
    ]
  }
};

// Export individual products for easier access
export const { auraPro, flowII } = products;
