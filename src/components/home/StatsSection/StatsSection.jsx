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

const StatsSection = ({ stats = [] }) => {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="stats-section">
      <Container>
        <Row className="text-center justify-content-center">
          {stats.map((stat, index) => (
            <Col md={3} key={stat.id || index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stat-box"
              >
                <h2><Counter end={stat.end} /></h2>
                <p>{stat.label}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
