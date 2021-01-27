import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Button } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Who built the Taj Mahal?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>
              Emperor <span style={{ fontWeight: "bold" }}>Shah Jahan</span>{" "}
              built the Taj Mahal in the memroy of his wife Mumtaz Mahal.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How much time did it take to build the Taj Mahal?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>
              The white marble monument, with its sprawling gardens, took more
              than <span style={{ fontWeight: "bold" }}>15 years</span> to build.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Hindu Precedents
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>
              The Indo-Islamic architecture had incorporated and reinterpreted
              many of the traditions, forms and symbolism of both the indigenous
              Hindu architecture with the predominant Islamic architecture ever
              since the era of the{" "}
              <span style={{ fontWeight: "bold" }}>Delhi Sultantate (1192 AD - 1451AD)</span>. During the
              Mughal Empire, the extent varied according to the prevailing
              political climate; scant with Babur, extensively with Akbar, but
              they ruled a land dominated by non-muslims and most buildings were
              built with Hindu craftsmen and labour under the direction of
              Muslim artists and architects. The vegetative tracery, inlay work
              and most obviously the lotus dome and finial of the Taj Mahal are
              all testament to this synthesis.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Architects and Craftsmen
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <>
              <Card.Body style={{ color: "black" }}>
                The exquisite and highly skilled Inlay work was developed by
                Mughal lapidarists from techniques taught to them by Italian
                craftsmen employed at court. The look of European herbals, books
                illustrating botanical species was adapted and refined in Mughal
                Inlay work. History obscures precisely who designed the Taj
                Mahal. In the Islamic world at that time, the credit for a
                building design was usually given to its patron rather than its
                architects. From the evidence of contemporary sources, it is
                clear that a team of architects were responsible for the design
                and supervision of the works, but they are mentioned
                infrequently. A labour force of about twenty thousand workers
                was recruited from across the Northern India. Sculptors from
                Bukhara, calligraphers from Syria and Persia, inlayers from
                southern India, stone cutters from Baluchistan, a specialist in
                building turrets, another who carved only marble flowers were
                part of the thirty-seven men who formed the creative unit. Some
                of the builders involved in construction of Taj Mahal under the
                master supervision of the Emperor Shah Jahan himself are:
              </Card.Body>
              <Card.Footer style={{ color: "black" }}>
                • Ismail Afandi (a.ka. Ismail Khan) of the Ottoman Empire -
                Designer of the main dome.
                <br />
                • Ustad Isa and Isa Muhammad Effendi of Persia - Credited with a
                key role in the architectural design.
                <br />
                • 'Puru' from Benarus, Persia - Mentioned as a Supervising
                Architect.
                <br />
                • Qazim Khan, a native of Lahore - Cast the solid Gold Finial.
                <br />
                • Chiranjilal, a lapidary from Delhi - The Chief Sculptor and
                Mosaicist
                <br />• Amanat Khan from Shiraz, Iran - The Chief Calligrapher
              </Card.Footer>
            </>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Concepts
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>
              Under the reign of Shah Jahan the symbolic content of Mughal
              architecture reached its peak. Inspired by a verse by Bibadal
              Khan, the imperial goldsmith and poet, and in common with most
              Mughal funerial architecture, the Taj Mahal complex was conceived
              as a replica on earth of the house of Mumtaz in paradise. This
              theme permeates the entire complex and informs the design and
              appearance of all its elements. A number of secondary principles
              were also used, of which hiearachy is the mostdominant. A
              deliberate interplay was established between the building's
              elements, its surface decoration, materials, geometric planning
              and its acoustics. This interplay extends from what can be seen
              with the senses, into religious, intellectual, mathematical and
              poetic ideas.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
      <Accordion /* defaultActiveKey="0" */>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              The Design
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body style={{ color: "black" }}>
              The historians and poets of Shah Jahan state that the Taj Mahal
              was to represent an earthly replica of the house of Mumtaz Mahal
              in the gardens of Paradise. This must not be dismissed as
              Shahjahani court rhetoric: it truly expresses the programme of the
              mausoleum. In order to realize the idea of the hatological garden
              house as closely as possible, the canonical out of previous
              imperial mausoleums, where the building stood at the centre of a
              cross-axially planned garden or chahar bagh, is abandoned, and the
              riverfront design that had become the prevailing residential
              garden type of Agra was chosen instead, and raised to a monumental
              scale. The interaction between residential and funerary genres had
              characterized Mughal architecture from the beginning. In the Taj
              Mahal the aim was to perfect the riverfront garden and enlarge it
              to a scale beyond the reach of ordinary mortals, to create here on
              earth and in the Mughal city paradisiacal garden palace for the
              deceased.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div style={{ height: 10 }} />
    </div>
  );
}

export default Home;
