import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./StatsSection.css";

const Counter = ({ end, duration = 4000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center">

          <Col md={3}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="stat-box"
            >
              <h2><Counter end={254} /></h2>
              <p>Project Complete</p>
            </motion.div>
          </Col>

          <Col md={3}>
            <motion.div className="stat-box">
              <h2><Counter end={164} /></h2>
              <p>Quality Team Member</p>
            </motion.div>
          </Col>

          <Col md={3}>
            <motion.div className="stat-box">
              <h2><Counter end={433} /></h2>
              <p>Awards Winning</p>
            </motion.div>
          </Col>

          <Col md={3}>
            <motion.div className="stat-box">
              <h2><Counter end={30} /></h2>
              <p>Years Of Experience</p>
            </motion.div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
