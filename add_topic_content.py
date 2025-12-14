import json

# Comprehensive content map for all sub-topics
content_map = {
    'arithmetic': {
        'examples': [
            {'title': 'Adding Numbers', 'description': '15 + 27: Align vertically, add column by column = 42', 'solution': '42', 'steps': ['Align: 15 and 27', 'Ones: 5+7=12, write 2, carry 1', 'Tens: 1+2+1=4', 'Result: 42']},
            {'title': 'Multiplying', 'description': '6 × 8 = 48 (6 groups of 8 objects)', 'solution': '48'}
        ],
        'graphics': [{'type': 'illustration', 'description': 'Visual: combining groups of objects to show addition', 'latex': None}]
    },
    'fractions': {
        'examples': [
            {'title': 'Adding Fractions', 'description': '1/3 + 1/4: Common denominator 12, so 4/12 + 3/12 = 7/12', 'solution': '7/12', 'steps': ['LCM(3,4) = 12', 'Convert: 1/3=4/12, 1/4=3/12', 'Add: 4+3=7', 'Result: 7/12']},
            {'title': 'Multiplying Fractions', 'description': '(2/3) × (3/4) = 6/12 = 1/2', 'solution': '1/2'}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Pie charts showing 1/3 and 1/4 portions of a circle', 'latex': None}]
    },
    'percentages': {
        'examples': [
            {'title': 'Calculating Percentage', 'description': '25% of 80 = 0.25 × 80 = 20', 'solution': '20', 'steps': ['Convert: 25% = 0.25', 'Multiply: 0.25 × 80', 'Result: 20']},
            {'title': 'Percentage Change', 'description': 'Price $50 → $60: Increase = (60-50)/50 × 100 = 20%', 'solution': '20%'}
        ],
        'graphics': [{'type': 'chart', 'description': 'Bar chart showing percentage relationships', 'latex': None}]
    },
    'exponents': {
        'examples': [
            {'title': 'Multiplying Powers', 'description': '2³ × 2⁴ = 2⁷ = 128 (add exponents when same base)', 'solution': '128', 'steps': ['Same base: 2³ × 2⁴', 'Add exponents: 3+4=7', 'Calculate: 2⁷=128']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Exponential growth: y = 2^x', 'latex': 'y = 2^x'}]
    },
    'order-of-operations': {
        'examples': [
            {'title': 'PEMDAS', 'description': '3 + 4 × 2: Multiply first (8), then add (11)', 'solution': '11', 'steps': ['PEMDAS order', 'Multiply: 4×2=8', 'Add: 3+8=11']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Flowchart: Parentheses → Exponents → Multiply/Divide → Add/Subtract', 'latex': None}]
    },
    'linear-equations': {
        'examples': [
            {'title': 'Graphing y = 2x + 3', 'description': 'Slope = 2, y-intercept = 3. Plot (0,3), use slope 2/1', 'solution': 'Line through (0,3) with slope 2', 'steps': ['m=2, b=3', 'Plot (0,3)', 'Rise 2, run 1', 'Draw line']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Graph of y = 2x + 3 showing slope and intercept', 'latex': 'y = 2x + 3'}]
    },
    'quadratics': {
        'examples': [
            {'title': 'Solving x² - 5x + 6 = 0', 'description': 'Quadratic formula: x = (5 ± 1)/2, so x = 3 or x = 2', 'solution': 'x = 2 or 3', 'steps': ['a=1, b=-5, c=6', 'Discriminant: 25-24=1', 'x = (5 ± 1)/2', 'Solutions: 2, 3']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Parabola y = x² - 5x + 6 with roots at x=2, x=3', 'latex': 'y = x^2 - 5x + 6'}]
    },
    'systems': {
        'examples': [
            {'title': 'System by Substitution', 'description': 'y = 2x + 1, 3x + y = 10. Substitute: 3x + (2x+1) = 10, so x = 1.8, y = 4.6', 'solution': 'x = 1.8, y = 4.6', 'steps': ['Substitute y', '3x + 2x + 1 = 10', '5x = 9', 'x = 1.8, y = 4.6']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Two lines intersecting at solution point', 'latex': None}]
    },
    'triangles': {
        'examples': [
            {'title': 'Pythagorean Theorem', 'description': 'Right triangle: legs 3, 4. Hypotenuse = √(9+16) = 5', 'solution': '5', 'steps': ['c² = a² + b²', 'c² = 9 + 16 = 25', 'c = 5']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Right triangle with squares on each side showing a² + b² = c²', 'latex': 'a^2 + b^2 = c^2'}]
    },
    'circles': {
        'examples': [
            {'title': 'Circle Area', 'description': 'Radius 5: Area = π × 25 = 25π ≈ 78.5', 'solution': '25π', 'steps': ['A = πr²', 'A = π × 5²', 'A = 25π']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Circle showing radius, diameter, area formula', 'latex': 'A = \\pi r^2'}]
    },
    'trigonometry': {
        'examples': [
            {'title': 'SOH-CAH-TOA', 'description': 'Triangle: opp=3, adj=4, hyp=5. sin=3/5, cos=4/5, tan=3/4', 'solution': 'sin=0.6, cos=0.8, tan=0.75', 'steps': ['Identify sides', 'sin = opp/hyp = 3/5', 'cos = adj/hyp = 4/5', 'tan = opp/adj = 3/4']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Right triangle labeled: opposite, adjacent, hypotenuse', 'latex': None}]
    },
    'logarithms': {
        'examples': [
            {'title': 'Log Properties', 'description': 'log(ab) = log(a) + log(b). Example: log(6) = log(2) + log(3)', 'solution': 'log(2) + log(3)', 'steps': ['Product rule', 'log(2×3) = log(2) + log(3)', 'log(6) = log(2) + log(3)']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Logarithmic function curve y = log(x)', 'latex': 'y = \\log(x)'}]
    },
    'polynomials': {
        'examples': [
            {'title': 'Polynomial Division', 'description': 'Divide x³ + 2x² - x - 2 by (x+1): Use synthetic division', 'solution': 'x² + x - 2', 'steps': ['Set up synthetic division', 'Bring down coefficient', 'Multiply and add', 'Result: x² + x - 2']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Synthetic division setup showing coefficients', 'latex': None}]
    },
    'sequences': {
        'examples': [
            {'title': 'Arithmetic Sequence', 'description': 'Sequence: 2, 5, 8, 11... Common difference d=3, nth term: a_n = 3n - 1', 'solution': 'a_n = 3n - 1', 'steps': ['a₁ = 2, d = 3', 'Formula: a_n = a₁ + d(n-1)', 'a_n = 2 + 3(n-1)', 'a_n = 3n - 1']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Linear sequence points showing arithmetic progression', 'latex': None}]
    },
    'series': {
        'examples': [
            {'title': 'Arithmetic Series Sum', 'description': 'Sum of 1+2+3+...+100: S = 100/2(1+100) = 5050', 'solution': '5050', 'steps': ['S_n = n/2(a₁ + a_n)', 'S = 100/2(1 + 100)', 'S = 50 × 101', 'S = 5050']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Visual representation of series sum', 'latex': 'S_n = \\frac{n}{2}(a_1 + a_n)'}]
    },
    'limits': {
        'examples': [
            {'title': 'Limit Definition', 'description': 'lim(x→2) (x²-4)/(x-2) = lim(x→2) (x+2) = 4', 'solution': '4', 'steps': ['Factor: (x-2)(x+2)/(x-2)', 'Cancel: x+2', 'Substitute: 2+2=4']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Graph showing function approaching limit as x→2', 'latex': '\\lim_{x \\to 2} \\frac{x^2-4}{x-2} = 4'}]
    },
    'derivatives': {
        'examples': [
            {'title': 'Power Rule', 'description': 'd/dx(x⁵) = 5x⁴ (multiply by exponent, decrease by 1)', 'solution': '5x⁴', 'steps': ['Power rule: d/dx(xⁿ) = nxⁿ⁻¹', 'n = 5', '5x⁵⁻¹ = 5x⁴']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Graph of x⁵ and its derivative 5x⁴', 'latex': '\\frac{d}{dx}(x^5) = 5x^4'}]
    },
    'integrals': {
        'examples': [
            {'title': 'Basic Integral', 'description': '∫x² dx = x³/3 + C (reverse of power rule)', 'solution': 'x³/3 + C', 'steps': ['Reverse power rule', 'Increase exponent: 2→3', 'Divide by new exponent: 1/3', 'Add constant C']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Area under curve x² showing integration', 'latex': '\\int x^2 dx = \\frac{x^3}{3} + C'}]
    },
    'integration-techniques': {
        'examples': [
            {'title': 'Integration by Parts', 'description': '∫x e^x dx: u=x, dv=e^x dx. Result: x e^x - e^x + C', 'solution': 'e^x(x-1) + C', 'steps': ['u = x, dv = e^x dx', 'du = dx, v = e^x', '∫u dv = uv - ∫v du', 'x e^x - e^x + C']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Integration by parts formula visualization', 'latex': '\\int u dv = uv - \\int v du'}]
    },
    'partial-derivatives': {
        'examples': [
            {'title': 'Partial Derivative', 'description': 'f(x,y) = x²y. ∂f/∂x = 2xy (treat y constant), ∂f/∂y = x² (treat x constant)', 'solution': '∂f/∂x = 2xy, ∂f/∂y = x²', 'steps': ['∂f/∂x: treat y constant, derivative = 2xy', '∂f/∂y: treat x constant, derivative = x²']}
        ],
        'graphics': [{'type': 'graph', 'description': '3D surface showing partial derivatives as slopes', 'latex': '\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}'}]
    },
    'vectors': {
        'examples': [
            {'title': 'Dot Product', 'description': 'a = (3,4), b = (1,2). a·b = 3×1 + 4×2 = 11', 'solution': '11', 'steps': ['a·b = a_x b_x + a_y b_y', 'a·b = 3×1 + 4×2', 'a·b = 11']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Two vectors showing dot product as projection', 'latex': '\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta'}]
    },
    'multiple-integrals': {
        'examples': [
            {'title': 'Double Integral', 'description': '∫∫ f(x,y) dA over rectangle [0,2]×[0,1]. Integrate inner then outer', 'solution': 'Depends on f', 'steps': ['Set up: ∫[0 to 2] ∫[0 to 1] f(x,y) dy dx', 'Integrate inner', 'Integrate outer']}
        ],
        'graphics': [{'type': 'diagram', 'description': '3D volume under surface showing double integral', 'latex': '\\iint f(x,y) dA'}]
    },
    'classical-mechanics': {
        'examples': [
            {'title': 'Projectile Motion', 'description': 'Ball launched at 30 m/s, 45°: Range = 30²sin(90°)/9.8 = 91.8 m', 'solution': '91.8 m', 'steps': ['R = v₀²sin(2θ)/g', 'R = 900×1/9.8', 'R = 91.8 m']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Parabolic trajectory showing range and height', 'latex': 'R = \\frac{v_0^2 \\sin(2\\theta)}{g}'}]
    },
    'electromagnetism': {
        'examples': [
            {'title': 'Coulomb\'s Law', 'description': 'Two 1μC charges 0.1m apart: F = kq₁q₂/r² = 0.9 N', 'solution': '0.9 N', 'steps': ['F = kq₁q₂/r²', 'F = 8.99×10⁹ × 10⁻¹² / 0.01', 'F = 0.9 N']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Two point charges with force vectors', 'latex': 'F = k\\frac{q_1 q_2}{r^2}'}]
    },
    'waves-optics': {
        'examples': [
            {'title': 'Wave Equation', 'description': 'Sound: f=440 Hz, λ=0.78 m. Speed v = fλ = 343 m/s', 'solution': '343 m/s', 'steps': ['v = fλ', 'v = 440 × 0.78', 'v = 343 m/s']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Wave diagram showing wavelength, frequency, amplitude', 'latex': 'v = f\\lambda'}]
    },
    'thermodynamics-physics': {
        'examples': [
            {'title': 'First Law', 'description': 'Gas receives 500J heat, does 200J work: ΔU = 500 - 200 = 300J', 'solution': '300J', 'steps': ['ΔU = Q - W', 'ΔU = 500 - 200', 'ΔU = 300J']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Energy flow: heat in, work out, internal energy change', 'latex': '\\Delta U = Q - W'}]
    },
    'modern-physics': {
        'examples': [
            {'title': 'Time Dilation', 'description': 'Muon at 0.99c: lifetime increases from 2.2μs to 15.6μs', 'solution': '15.6 μs', 'steps': ['γ = 1/√(1-0.99²) = 7.09', 'Δt = γΔt₀', 'Δt = 7.09 × 2.2 = 15.6 μs']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Light clock diagram showing time dilation', 'latex': '\\Delta t = \\gamma \\Delta t_0'}]
    },
    'nuclear-physics': {
        'examples': [
            {'title': 'Radioactive Decay', 'description': 'Carbon-14 half-life 5730 years. After 11,460 years, 25% remains', 'solution': '25%', 'steps': ['11,460 = 2 half-lives', 'After 1: 50%', 'After 2: 25%']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Exponential decay curve showing half-life', 'latex': 'N(t) = N_0 e^{-\\lambda t}'}]
    },
    'orbital-mechanics': {
        'examples': [
            {'title': 'Kepler\'s Third Law', 'description': 'Mars: a=1.52 AU. Period T² = (1.52)³ = 3.51, so T = 1.88 years', 'solution': '1.88 years', 'steps': ['T² ∝ a³', 'T² = (1.52)³ = 3.51', 'T = √3.51 = 1.88']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Elliptical orbit showing semi-major axis and period', 'latex': 'T^2 = \\frac{4\\pi^2}{GM}a^3'}]
    },
    'stellar-physics': {
        'examples': [
            {'title': 'Stellar Luminosity', 'description': 'Star: 2× Sun radius, 1.5× Sun temp. Luminosity = 2² × 1.5⁴ = 20.25× solar', 'solution': '20.25×', 'steps': ['L ∝ R²T⁴', 'L = 4 × 5.0625', 'L = 20.25×']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Hertzsprung-Russell diagram showing stellar properties', 'latex': 'L = 4\\pi R^2 \\sigma T^4'}]
    },
    'observational-astronomy': {
        'examples': [
            {'title': 'Parallax Distance', 'description': 'Star with parallax 0.1 arcsec: distance = 1/0.1 = 10 parsecs', 'solution': '10 pc', 'steps': ['d = 1/p', 'd = 1/0.1', 'd = 10 pc']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Parallax triangle showing Earth\'s orbit and star', 'latex': 'd = \\frac{1}{p}'}]
    },
    'cosmology': {
        'examples': [
            {'title': 'Hubble\'s Law', 'description': 'Galaxy 100 Mpc away: velocity = 70 × 100 = 7000 km/s', 'solution': '7000 km/s', 'steps': ['v = H₀d', 'v = 70 × 100', 'v = 7000 km/s']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Hubble diagram: velocity vs distance showing expansion', 'latex': 'v = H_0 d'}]
    },
    'planetary-science': {
        'examples': [
            {'title': 'Planetary Temperature', 'description': 'Planet distance affects temperature. Closer = hotter, farther = colder', 'solution': 'T ∝ 1/√d', 'steps': ['Equilibrium: incoming = outgoing', 'T⁴ ∝ 1/d²', 'T ∝ 1/√d']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Solar system showing habitable zone and temperatures', 'latex': None}]
    },
    'black-holes-relativity': {
        'examples': [
            {'title': 'Schwarzschild Radius', 'description': 'Sun mass: R_s = 2GM/c² = 2.95 km (if collapsed to black hole)', 'solution': '2.95 km', 'steps': ['R_s = 2GM/c²', 'R_s = 2 × 6.67×10⁻¹¹ × 2×10³⁰ / 9×10¹⁶', 'R_s = 2.95 km']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Event horizon diagram showing Schwarzschild radius', 'latex': 'R_s = \\frac{2GM}{c^2}'}]
    },
    'electronics-fundamentals': {
        'examples': [
            {'title': 'Ohm\'s Law', 'description': 'Circuit: V=12V, R=4Ω. Current I = V/R = 12/4 = 3A', 'solution': '3A', 'steps': ['I = V/R', 'I = 12/4', 'I = 3A']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Simple circuit: voltage source and resistor', 'latex': 'V = IR'}]
    },
    'circuit-analysis': {
        'examples': [
            {'title': 'Kirchhoff\'s Laws', 'description': 'KVL: ΣV = 0 around loop. KCL: ΣI = 0 at node', 'solution': 'Conservation laws', 'steps': ['KVL: energy conservation', 'KCL: charge conservation', 'Solve system']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Circuit showing loops and nodes for analysis', 'latex': None}]
    },
    'passive-components': {
        'examples': [
            {'title': 'RC Circuit', 'description': 'RC time constant τ = RC. At t=τ, capacitor charges to 63.2%', 'solution': 'τ = RC', 'steps': ['τ = RC', 'At t=τ: V = V₀(1 - 1/e)', 'V ≈ 0.632V₀']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Capacitor charging curve showing exponential approach', 'latex': 'V(t) = V_0(1 - e^{-t/RC})'}]
    },
    'analog-circuits': {
        'examples': [
            {'title': 'Op-Amp Gain', 'description': 'Inverting amplifier: Gain = -R₂/R₁. If R₂=10kΩ, R₁=1kΩ, gain = -10', 'solution': '-10', 'steps': ['Gain = -R₂/R₁', 'Gain = -10k/1k', 'Gain = -10']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Operational amplifier inverting configuration', 'latex': 'G = -\\frac{R_2}{R_1}'}]
    },
    'ac-circuits': {
        'examples': [
            {'title': 'Capacitor Impedance', 'description': 'Capacitor 1μF at 1kHz: X_C = 1/(2πfC) = 159Ω', 'solution': '159Ω', 'steps': ['X_C = 1/(ωC)', 'ω = 2πf = 6283 rad/s', 'X_C = 1/(6283×10⁻⁶) = 159Ω']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Impedance vs frequency for capacitor', 'latex': 'X_C = \\frac{1}{2\\pi f C}'}]
    },
    'semiconductors': {
        'examples': [
            {'title': 'Diode Voltage', 'description': 'Silicon diode forward voltage ≈ 0.7V. Below this, current is very small', 'solution': '0.7V', 'steps': ['Forward bias', 'Voltage drop ≈ 0.7V', 'Current flows']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Diode I-V characteristic curve', 'latex': None}]
    },
    'digital-electronics': {
        'examples': [
            {'title': 'Logic Gates', 'description': 'AND gate: Output = 1 only when both inputs = 1', 'solution': 'A AND B', 'steps': ['AND: both must be 1', 'OR: either can be 1', 'NOT: inverts input']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Logic gate symbols and truth tables', 'latex': None}]
    },
    'signal-processing': {
        'examples': [
            {'title': 'Filter Response', 'description': 'Low-pass filter: Passes frequencies below cutoff f_c = 1/(2πRC)', 'solution': 'f_c = 1/(2πRC)', 'steps': ['RC low-pass filter', 'Cutoff frequency f_c', 'f_c = 1/(2πRC)']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Frequency response showing passband and stopband', 'latex': 'f_c = \\frac{1}{2\\pi RC}'}]
    },
    'mechanics-fundamentals': {
        'examples': [
            {'title': 'Newton\'s Second Law', 'description': '5kg object, 4 m/s² acceleration: F = ma = 5 × 4 = 20N', 'solution': '20N', 'steps': ['F = ma', 'F = 5 × 4', 'F = 20N']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Free body diagram showing F = ma', 'latex': 'F = ma'}]
    },
    'statics-structures': {
        'examples': [
            {'title': 'Force Balance', 'description': 'Beam supported at ends: ΣF = 0, ΣM = 0 for equilibrium', 'solution': 'Balanced', 'steps': ['Sum forces = 0', 'Sum moments = 0', 'Equilibrium']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Free body diagram showing forces and moments', 'latex': '\\Sigma F = 0, \\Sigma M = 0'}]
    },
    'kinematics-dynamics': {
        'examples': [
            {'title': 'Kinematic Equations', 'description': 'v₀=10 m/s, a=2 m/s². After 3s: v = 16 m/s, x = 39 m', 'solution': 'v=16 m/s, x=39 m', 'steps': ['v = v₀ + at', 'v = 10 + 6 = 16', 'x = v₀t + ½at²', 'x = 39']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Position-time and velocity-time graphs', 'latex': 'v = v_0 + at, x = v_0t + \\frac{1}{2}at^2'}]
    },
    'thermodynamics': {
        'examples': [
            {'title': 'Ideal Gas Law', 'description': 'PV = nRT. At STP: n=1mol, V = 22.4L', 'solution': '22.4L', 'steps': ['PV = nRT', 'V = nRT/P', 'V = 22.4L']}
        ],
        'graphics': [{'type': 'graph', 'description': 'PV diagram showing ideal gas isotherms', 'latex': 'PV = nRT'}]
    },
    'fluid-mechanics': {
        'examples': [
            {'title': 'Bernoulli Principle', 'description': 'Fluid speed increases, pressure decreases. P + ½ρv² + ρgh = constant', 'solution': 'Constant', 'steps': ['Conservation of energy', 'Speed ↑, pressure ↓', 'Total constant']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Venturi tube showing pressure and velocity changes', 'latex': 'P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}'}]
    },
    'machine-design': {
        'examples': [
            {'title': 'Gear Ratio', 'description': 'Gear 1: 20 teeth, Gear 2: 40 teeth. Ratio = 2:1 (speed reduction)', 'solution': '2:1', 'steps': ['Ratio = N₂/N₁', 'Ratio = 40/20', 'Ratio = 2:1']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Gear train showing teeth and rotation', 'latex': '\\text{Ratio} = \\frac{N_2}{N_1}'}]
    },
    'algorithms-complexity': {
        'examples': [
            {'title': 'Big-O Notation', 'description': 'Linear search: O(n). Binary search: O(log n). Much faster for large n', 'solution': 'O(n) vs O(log n)', 'steps': ['Linear: n comparisons', 'Binary: log₂(n) comparisons', 'Binary faster']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Complexity comparison: O(1), O(log n), O(n), O(n²)', 'latex': None}]
    },
    'sorting-searching': {
        'examples': [
            {'title': 'Binary Search', 'description': 'Search sorted array of 1000: O(log n) = ~10 comparisons', 'solution': '~10 comparisons', 'steps': ['Compare middle', 'Eliminate half', 'Repeat', 'O(log n)']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Binary search tree showing search path', 'latex': None}]
    },
    'data-structures': {
        'examples': [
            {'title': 'Hash Table', 'description': 'Insert/search: O(1) average. Hash function maps key to index', 'solution': 'O(1)', 'steps': ['Hash function', 'Map to index', 'Direct access', 'O(1) average']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Hash table showing buckets and collisions', 'latex': None}]
    },
    'graph-algorithms': {
        'examples': [
            {'title': 'Dijkstra\'s Algorithm', 'description': 'Find shortest path from node A. Greedy: always choose closest unvisited', 'solution': 'Shortest paths', 'steps': ['Start at source', 'Mark visited', 'Choose closest', 'Repeat']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Weighted graph showing shortest path tree', 'latex': None}]
    },
    'embedded-systems': {
        'examples': [
            {'title': 'Microcontroller Timing', 'description': '8MHz clock, 1 instruction/cycle: 8 MIPS', 'solution': '8 MIPS', 'steps': ['Clock = 8MHz', '1 instruction/cycle', '8M instructions/sec']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Timing diagram showing clock cycles', 'latex': None}]
    },
    'low-level-programming': {
        'examples': [
            {'title': 'Bitwise Operations', 'description': 'AND: 0b1010 & 0b1100 = 0b1000. OR: 0b1010 | 0b1100 = 0b1110', 'solution': 'AND=8, OR=14', 'steps': ['AND: both 1 → 1', 'OR: either 1 → 1', 'XOR: different → 1']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Bitwise operation truth tables', 'latex': None}]
    },
    'feedback-control': {
        'examples': [
            {'title': 'PID Controller', 'description': 'u = K_p e + K_i ∫e dt + K_d de/dt. Tune K_p, K_i, K_d', 'solution': 'Tuned', 'steps': ['P: current error', 'I: accumulated error', 'D: error rate', 'Combine']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Step response showing PID effect', 'latex': 'u(t) = K_p e(t) + K_i \\int e(t)dt + K_d \\frac{de}{dt}'}]
    },
    'system-analysis': {
        'examples': [
            {'title': 'Transfer Function', 'description': 'G(s) = Y(s)/U(s). Output/input in Laplace domain', 'solution': 'G(s)', 'steps': ['Laplace transform', 'G(s) = output/input', 'Poles determine stability']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Bode plot showing frequency response', 'latex': 'G(s) = \\frac{Y(s)}{U(s)}'}]
    },
    'stability-analysis': {
        'examples': [
            {'title': 'Routh-Hurwitz', 'description': 'Check polynomial: All coefficients positive, Routh table first column positive = stable', 'solution': 'Stable', 'steps': ['Form Routh table', 'Check first column', 'All positive = stable']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Root locus plot showing stability region', 'latex': None}]
    },
    'controller-design': {
        'examples': [
            {'title': 'Lead-Lag Compensator', 'description': 'Improves response. Lead: increases phase margin. Lag: reduces error', 'solution': 'Compensated', 'steps': ['Design lead', 'Add lag if needed', 'Tune', 'Verify']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Bode plot: uncompensated vs compensated', 'latex': None}]
    },
    'automation': {
        'examples': [
            {'title': 'State Machine', 'description': 'States: Idle → Running → Paused → Stopped. Transitions on events', 'solution': 'State transitions', 'steps': ['Define states', 'Define transitions', 'Implement', 'Handle events']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'State diagram showing states and transitions', 'latex': None}]
    },
    'digital-control': {
        'examples': [
            {'title': 'Z-Transform', 'description': 'Discrete-time Laplace. z = e^(sT) where T is sampling period', 'solution': 'Z-domain', 'steps': ['Sample signal', 'Apply z-transform', 'Analyze', 'Design']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Z-plane showing unit circle and stability', 'latex': 'z = e^{sT}'}]
    },
    'mental-math': {
        'examples': [
            {'title': 'Multiply by 11', 'description': '23 × 11: Add digits (2+3=5), insert: 253', 'solution': '253', 'steps': ['Add digits: 2+3=5', 'Insert between: 2,5,3', 'Result: 253']}
        ],
        'graphics': [{'type': 'illustration', 'description': 'Visual method for multiplying by 11', 'latex': None}]
    },
    'algebra-tricks': {
        'examples': [
            {'title': 'Difference of Squares', 'description': 'x² - y² = (x+y)(x-y). Example: 25-16 = (5+4)(5-4) = 9', 'solution': '9', 'steps': ['Recognize pattern', 'Factor', 'Calculate']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Geometric proof: square with smaller square removed', 'latex': 'a^2 - b^2 = (a+b)(a-b)'}]
    },
    'calculus-tricks': {
        'examples': [
            {'title': 'Derivative Shortcuts', 'description': 'd/dx(e^x) = e^x, d/dx(ln x) = 1/x. Memorize common derivatives', 'solution': 'Common derivatives', 'steps': ['Memorize basics', 'Apply chain rule', 'Use shortcuts']}
        ],
        'graphics': [{'type': 'chart', 'description': 'Table of common derivatives', 'latex': None}]
    },
    'log-tricks': {
        'examples': [
            {'title': 'Log Quick Conversions', 'description': 'log(1000) = 3, log(0.01) = -2. Recognize powers of 10', 'solution': '3 and -2', 'steps': ['Powers of 10', 'log(10ⁿ) = n', 'Apply']}
        ],
        'graphics': [{'type': 'chart', 'description': 'Logarithm values for powers of 10', 'latex': None}]
    },
    'trig-tricks': {
        'examples': [
            {'title': 'Trig Quick Values', 'description': 'sin(30°)=1/2, sin(45°)=√2/2, sin(60°)=√3/2. Memorize unit circle', 'solution': 'Common angles', 'steps': ['Unit circle', '30°, 45°, 60°', 'Use symmetry']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Unit circle showing key angles and values', 'latex': None}]
    },
    'physics-equations': {
        'examples': [
            {'title': 'Einstein E=mc²', 'description': 'Mass-energy: 1 kg = 9×10¹⁶ J', 'solution': '9×10¹⁶ J', 'steps': ['E = mc²', 'E = 1 × (3×10⁸)²', 'E = 9×10¹⁶ J']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Mass-energy equivalence', 'latex': 'E = mc^2'}]
    },
    'mathematics-equations': {
        'examples': [
            {'title': 'Euler\'s Identity', 'description': 'e^(iπ) + 1 = 0. Most beautiful equation', 'solution': '0', 'steps': ['e^(ix) = cos(x) + i sin(x)', 'At x=π: e^(iπ) = -1', 'e^(iπ) + 1 = 0']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Complex plane showing e^(iπ)', 'latex': 'e^{i\\pi} + 1 = 0'}]
    },
    'finance-equations': {
        'examples': [
            {'title': 'Black-Scholes', 'description': 'Option pricing model combining stock price, strike, time, volatility', 'solution': 'Option price', 'steps': ['Input parameters', 'Calculate d₁, d₂', 'Apply formula']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Option price vs stock price payoff', 'latex': None}]
    },
    'millennium-prize': {
        'examples': [
            {'title': 'P vs NP', 'description': 'Can easy-to-verify problems be solved quickly? Most important CS problem', 'solution': 'Unknown', 'steps': ['P: solvable quickly', 'NP: verifiable quickly', 'Is P = NP?', 'Most believe P ≠ NP']}
        ],
        'graphics': [{'type': 'diagram', 'description': 'Venn diagram: P and NP problem classes', 'latex': None}]
    },
    'number-theory-problems': {
        'examples': [
            {'title': 'Riemann Hypothesis', 'description': 'All non-trivial zeros of ζ(s) have real part 1/2. $1M prize', 'solution': 'Unproven', 'steps': ['Zeta function', 'Find zeros', 'Hypothesis: all on line', 'Not proven']}
        ],
        'graphics': [{'type': 'graph', 'description': 'Critical line showing Riemann zeta zeros', 'latex': '\\zeta(s) = 0, \\text{Re}(s) = \\frac{1}{2}'}]
    }
}

# Read topics.json
with open('content/topics.json', 'r') as f:
    topics = json.load(f)

def add_content_recursive(topic):
    topic_id = topic.get('id', '')
    
    # Add content if available
    if topic_id in content_map:
        topic['examples'] = content_map[topic_id]['examples']
        topic['graphics'] = content_map[topic_id]['graphics']
    
    # Process children
    if 'children' in topic and topic['children']:
        for child in topic['children']:
            add_content_recursive(child)

# Process all topics
add_content_recursive(topics)

# Write back
with open('content/topics.json', 'w') as f:
    json.dump(topics, f, indent=2)

print("✅ Added examples and graphics to all sub-topics")
