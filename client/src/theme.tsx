// src/theme.tsx

const theme = {
    leftFrame: {
        container: {
            width: '250px',
            borderRadius: '10px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '2px solid black',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '1px 1px 10px 0px black',        
        },
        title: {
            fontWeight: 'bold',
            color: 'black',
        },
        button: {
            bgcolor: 'primary.main',
            color: 'white',
        },
    },
    rightFrame: {
        container: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            padding: '12px',
            borderRadius: '8px',
        },
        card: {
            maxWidth: 200,
            bgcolor: 'white',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px',
            border: '2px solid black',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '1px 1px 10px 0px black',
        },
        title: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: '1.2em',
        },
        description: {
            color: '#555555',
            fontSize: '0.9em',
        },
        button: {
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
            marginTop: 2,
            '&:hover': {
                bgcolor: 'primary.dark',
            },
        },
    },
    header: {
        appBar: {
            bgcolor: 'rgba(34, 34, 34, 0.8)',
            backdropFilter: 'blur(5px)',
        },
        title: {
            color: '#EAEAEA',
        },
    },
    footer: {
        container: {
            bgcolor: 'rgba(34, 34, 34, 0.8)',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            padding: '16px',
            textAlign: 'center',
            backdropFilter: 'blur(5px)',
        },
        text: {
            color: '#EAEAEA',
        },
    },
    carCard: {
        card: {
            maxWidth: 345,
            margin: 2,
        },
        button: {
            marginTop: 2,
        },
    },
    global: {
        body: {
            bgcolor: 'black',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            margin: 0,
            minWidth: '320px',
            minHeight: '100vh',
        },
        h1: {
            fontSize: '3.2em',
            lineHeight: 1.1,
            color: '#9FCC2E',
        },
        h3: {
            color: '#4B6858',
        },
        h4: {
            color: '#424C55',
        },
        button: {
            borderRadius: '8px',
            border: '1px solid transparent',
            padding: '0.6em 1.2em',
            margin: '5% 7%',
            fontSize: '1em',
            fontWeight: 500,
            fontFamily: 'inherit',
            backgroundColor: '#fff',
            color: '#67AAF9',
            cursor: 'pointer',
            transition: 'border-color 0.25s',
            '&:hover': {
                borderColor: '#058ed9',
            },
            '&:focus, &:focus-visible': {
                outline: '4px auto -webkit-focus-ring-color',
            },
        },
        nav: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1em 2em',
        },
        navTitle: {
            fontSize: 'larger',
            fontWeight: 900,
        },
        navItem: {
            display: 'block',
            marginLeft: 'auto',
            listStyle: 'none',
        },
        navLink: {
            color: 'fff',
            textDecoration: 'none',
        },
    },
    mainPage: {
        container: {
            position: 'relative',
            overflow: 'hidden',
            height: '100vh',
            width: '100vw',
            backgroundImage: `url('src/assets/bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        },
        backgroundBox: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
        },
        content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingTop: '80px',
            paddingBottom: '64px',
            overflowY: 'auto',
        },
        layoutContainer: {
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '1200px',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            gap: '16px',  // Added gap between frames
        },
    },
};

export default theme;