import { motion } from 'framer-motion';

export const MotionLogo = () => {
    // Exact Mowka Logo Configuration
    // 3 Rings. 8 Dots per Ring. 24 Dots Total.
    const rings = [
        { radius: 14, dotSize: 4, offset: 70 },      // Inner (Finer)
        { radius: 26, dotSize: 7.5, offset: 45 }, // Middle (Larger)
        { radius: 46, dotSize: 11, offset: 30 }     // Outer (Largest impact)
    ];

    // Colors: 6 Dark (#173054), 6 Medium (#225777), 12 Light (#3a868f)
    // Distributed as 2 Dark, 2 Medium, 4 Light per ring to create the "Wedge" effect
    const colors = [
        '#173054', '#173054', // 2 Dark
        '#225777', '#225777', // 2 Medium
        '#3a868f', '#3a868f', '#3a868f', '#3a868f' // 4 Light
    ];

    const generateDots = () => {
        let allDots = [];
        rings.forEach((ring) => {
            for (let i = 0; i < 8; i++) {
                const angleDeg = (i * 45) + ring.offset; // 360 / 8 = 45 degrees
                const angleRad = (angleDeg * Math.PI) / 180;

                // Convert Polar to Cartesian
                // Center is 50, 50
                const cx = 50 + ring.radius * Math.cos(angleRad);
                const cy = 50 + ring.radius * Math.sin(angleRad);

                allDots.push({
                    cx,
                    cy,
                    r: ring.dotSize,
                    color: colors[i] // Assign color based on position in circle (0-7)
                });
            }
        });
        return allDots;
    };

    const dots = generateDots();

    return (
        <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {dots.map((dot, index) => (
                    <motion.circle
                        key={index}
                        cx={dot.cx}
                        cy={dot.cy}
                        r={dot.r}
                        fill={dot.color}
                        initial={{
                            opacity: 0,
                            x: (Math.random() - 0.5) * 600, // Widened scatter range
                            y: (Math.random() - 0.5) * 600,
                            scale: 0
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            scale: 1
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0.16, 1, 0.3, 1], // Apple-style Spring
                            delay: Math.random() * 0.4, // Organized Chaos
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 }
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};
