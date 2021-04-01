// list of monsters

export const monsters = [
    {
        id: '1',
        name: 'Brown Bear',
        image: 'http://placebear.com/200/300',
        description: 'Can bite and claw trespassers.',
        category: 'Beast',
        isTamed: true,
        dangerLevel: 'yellow',
        price: 4000
    },

    {
        id: '2',
        name: 'Dire Wolf',
        image: '../assets/dire-wolf.jpeg',
        description: 'Can bite trespassers. Works well with other wolves.',
        category: 'Beast',
        isTamed: true,
        dangerLevel: 'yellow',
        price: 8000
    },

    {
        id: '3',
        name: 'Animated Armor',
        image: '../assets/animated-armor.jpeg',
        description: 'Looks like basic armor when still. Can slam trespassers.',
        category: 'Construct',
        isTamed: true,
        dangerLevel: 'green',
        price: 10000
    },

    {
        id: '4',
        name: 'Animated Table',
        image: '../assets/animated-table.jpeg',
        description: 'Great for dealing with offensive dinner guests. Can charge and ram them on command. Looks like a normal table.',
        category: 'Construct',
        isTamed: true,
        dangerLevel: 'green',
        price: 12000
    },

    {
        id: '5',
        name: 'Basilisk',
        image: '../assets/basilisk.jpeg',
        description: 'Very dangerous, purchase with caution. Can petrify anything with eye contact. Has a tendency to bite.',
        category: 'Monstrosity',
        isTamed: false,
        dangerLevel: 'red',
        price: 50000
    },

    {
        id: '6',
        name: 'Mimic',
        image: '../assets/mimic.jpeg',
        description: 'Can mimic anything close to its natural size. Appears as the normal object. Can bite, smack, or grapple trespassers. Can adhere to anything it touches.',
        category: 'Monstrosity',
        isTamed: false,
        dangerLevel: 'orange',
        price: 80000
    }
];
