import PropTypes from "prop-types";
import { Box, Container, Link, Typography} from '@mui/material';

type NavLink = {
  href:string;
  name:string;
}

interface Props {
  company: NavLink;
  links: NavLink[];
  light: boolean;
  date: number;
}

function Footer( content:Props ) {
  
  const {company, links, light, date} = content;

  const renderLinks = () =>
    links.map((link, key) => (
      <Box
        key={link.name}
        component="li"
        pl={key === 0 ? 0 : 2}
        pr={key === links.length - 1 ? 0 : 2}
        lineHeight={1}
      >
        <Link href={link.href}>
          <Typography variant="button" fontWeight="light" color={light ? "pink" : "text"} textTransform={"none"}>
            {link.name}
          </Typography>
        </Link>
      </Box>
    ));

  return (
    <Box width="100%" position="relative" bottom="1.625rem">
      <Container>
        <Box
          component="footer"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexWrap="wrap"
          fontWeight="light"
          fontSize=".875rem"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "pink" : "text"}
            textTransform={"none"}
            fontWeight="light"
            fontSize="inherit"
          >
            &copy; {date} 
            <Link href="isomorphi.cloud" target="_blank">
              <Typography variant="button" fontWeight="light" color={light ? "pink" : "dark"} textTransform={"none"} marginLeft={"5px"}>
                {company.name} 
              </Typography>
            </Link>
          </Box>
          <Box
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mb: 0,
              p: 0,
              [breakpoints.values.lg]: {
                mt: 0,
              },
            })}
          >
            {renderLinks()}
          </Box>
        </Box>
      </Container>
    </Box>
  );

}


// Footer.defaultProps = defaultProps;

Footer.propTypes = {
  company: PropTypes.shape({
    name:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired,
  }
  ).isRequired,
  light: PropTypes.oneOf([true, false]).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string.isRequired,
    href:PropTypes.string.isRequired,
  }).isRequired).isRequired,
  date: PropTypes.instanceOf(Number).isRequired,
};

export default Footer;