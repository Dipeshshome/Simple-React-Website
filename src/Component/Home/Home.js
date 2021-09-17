import { useState } from "react";
import React from 'react';
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";

const Home = () => {

    const courses = [{ cname: 'React Crash Course', cprice: 5.99, ccategory: 'Web Development', cimg: "data:image/jpeg;base64,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" }, { cname: 'React Native Crash Course', cprice: 3.99, ccategory: 'Web Development', cimg: "https://i.ytimg.com/vi/mkualZPRZCs/maxresdefault.jpg" }, { cname: 'Nodejs Crash Course', cprice: 7.99, ccategory: 'Web Development', cimg: "https://i.ytimg.com/vi/fBNz5xF-Kx4/maxresdefault.jpg" }, { cname: 'Django Crash Course', cprice: 9.99, ccategory: 'Web Development', cimg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUTEhMQFhITFRYYFRUYFRUXFxcWGhYYFxYVGBMYHisgHxolGxYVIjIhJiktMC8uFx8zODMtNygtLi0BCgoKDg0OGxAQGjAlICUtLS0tKy0rLS0tLS0tLS0tLS0tLS0yKy0tLTUyLS0tLS0vLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYCAwUHAf/EAEUQAAEDAQMGCQkGBgIDAQAAAAEAAgMRBBIhBQYTMUFRFBVSU2FxkaHRFiIygZKTscHhByMzYnOiNFRygrLCQvAkQ/EX/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAMBAgQFBgf/xAA+EQABAwEFAQwJAgYDAAAAAAABAAIRAwQSITFRQQUTFBVSYXGBkaGi0QYWIjJCU7HS8DPBIyRDcsLhYoLx/9oADAMBAAIRAxEAPwDydERb1nRS8k/jM/u/xKiKXkn8Zn93+JV2e8OlLq+47oK6OXfw2/1/IrhruZd/Db/X8iuGrV/fS7L+mOtEREpaEREQhFssn4jP62/ELuxZFhETHyyFt4A1LmtFSK0FQvsNgsYcCJwSCKDSx4muC0CzPwOHasbrZTgjHbsXzK34LvV8Qq8rla7NCWEPfRuFTeaNu8rm8X2L+YHvY/BNq0HOdIjtSLPamMZBB7FX0Vg4vsX8wPex+CcX2L+YHvY/BL4K/m7U/htPQ9ir6KwcX2L+YHvY/BOL7F/MD3sfgjgr+btRw2noexV9FY4Mi2Z5oyYuNK0EkZNN9AFX7RHde5uu64ivUaJT6TmYn6ptK0MqkhuxYIiJaeiIiEIiIhCIiIQiIiEIi+EpeG8IQvqIiEIiIhCIiIQiIiEIpWSzSZv93+JUVbbLJdeHHZ4EKzcwquF5pHMuxlZpewBuJvV7iuTwN/JPcp/GLPzdn1TjFn5uz6p7wxxklZ6YqMbdDVA4G/knuTgb+Se5T+MWfm7PqnGLPzdn1VLjNVe/U5KgcDfyT3JwN/JPcp/GLPzdn1TjFn5uz6ouU9VN+ryVMyuwus0LWirhcqOqMhcmzWV4e0lpoHAnVvXXtloDY2ONaGlOyqhcYs/N2fVOqhpdJOiz2e+2nDRhJUnKkgMTvV8QuAp9rtrXNIAOO9QEiqQ5y02emWNjnSqVREqE9KpVERCF2M13gTOrzZ/yaubbTWWT9R/+RU3N/wDEP6Z+IUG1fiP/AFH/ABKe79Jo5ysrW/zDjzBaV9RElaoRERCIRERCIRERCIRERCIVuzNktMdltM8MUMkcD4pDfOIINZWsaB516MUcKijcRVWeaa08KiY8WMuLnRuszZmyvE7o2Og4S262gY+Jj3PbeoGu6jScj53WizQiGIQaKspe10YdpdI244PcTUANwF0t6aqT5cWi/pRFYhOQ69OIBpXPdGYzI5xJF6652FLpJqQVQtMqQsWZj2tzpAX2bSNndDddKQ6aW4JaRkto681wIqRWqyOYVrpgYHO4O60XA6S/ow1jqCsYBfSRuAOuuIW0/aDaqNrHYzIwtc2UxG+2RsYiEoAdcDwwAejTDUsWfaBag5jgyzh7ImxB1JSS1ronCoMl2tYWVoBWp9R7SjBYQZg2x7Yy0Q1ljikay+4PEcr7ge5t2ga00LsTQEKsyso4irXUJF5pJa6hpeaSBUHWMFYbXnrapJDI7RBxgng80OFI53Fzqedrbeo3ddGuirikTtUFERFKhEREIXczfzZfao3PZIxoa+6Q4HXdDq4f1Lqf/n83PQ9jlN+zm1MZZ5Q51CZydurRM3K18Yxcsdh8Fup0GOYCQudVtT2vIBy6FR/ICbnoOxyeQE3PQdjleOMYuWOw+CcYxcsdh8FfgzNFThlTlDuVH8gJueg7HJ5ATc9B2OV44xi5Y7D4JxjFyx2HwRwZmiOGVOUO5UfyAm56DscnkBNz0HY5XjjGLljsPgnGMXLHYfBHBmaI4ZU5Q7lVbZmbI+NjBLGC2mNHbBRQfICbnoOxyvHGMXLHYfBOMYuWOw+Cs6i1xkhVZaXMENI7lR/ICbnoOxyeQE3PQdjleOMYuWOw+CcYxcsdh8FXgzNFbhlTlDuVH8gJueg7HJ5ATc9B2OV44xi5Y7D4JxjFyx2HwRwZmiOGVOUO5UWTMKUCumh/ctPkTNzsX7/BXy0W6MtoHCuGw+Ci8Jbv+KxWm7TfExgsFp3StLHww4RoOfmVYybmpJG8uMkJqKYXt4PyWifM2VznO0sWJJ/57TXcrdwlu/4pwlu/4pO/CIkdyyjdK1hxdOP9qpvkTNzsX7/BPImbnYv3+CuXCW7/AIpwlu/4qu+N1CtxrbNfCPJU3yJm52L9/gnkTNzsX7/BXLhLd/xThLd/xRvjdQjjW2a+EeSpvkTNzsX7/BPImbnYv3+CuXCW7/inCW7/AIo3xuoRxrbNfCPJU3yJm52L9/gnkTNzsX7/AAVy4S3f8U4S3f8AFG+N1CONbZr4R5Km+RM3Oxfv8E8iZudi/f4K5cJbv+KcJbv+KN8bqEca2zXwjyVO8iZudh/f4KqMfVeucJbv+K8ggGrqVmuDsiuvuVaq1ov76crsYRnM/QLaURFddQoiIoQiIiEIiIhCtOaP4T/1f9WrusYSQGgkk0AAJJOwADWVws0fwn/q/wCrVbs2P42z/rM/zC61IxRB5lwa7b1oLdTHatXE9o/l5/dv8FDe0gkEEEawRQg7iCvY85cvvsroQ2Ey6UuBoSCKFuoAGpN7uXPz4yJFM6BxcI3ulEV+7Woc1xaCKivnNAG6pWSlbnEtvtgOmDM5c2f5tWqrue0BwpukiJBGvP8AnUvK0ArgKkqxZdzUfZ54IhJf4QbrXXbtHXg0ilTqvNK7+SszRBbYaT3nNa6WmjpgxzG0re23j7JWh1rpBt6cwSM8Y6llZZKrnXbuRAOWE9eOYXn74yNYI6wR8VMlyPO2PSuhkEVAb5Hm0NKGvTUdq9E+0TI2miE9+7oGnzbtb14t21w1bip1qye60ZLZCwgOfDBidQAuEnsBSOHi612GJg54fRaeLiHPbjgJblj9duC8gRXLLmYjoIHSsmv6MVc0su4DWQanVroo+bmZMlpjEr3iJjvR8285w5WsUG47e9aBaqJZfvYZbf8A1ZTZKwfcu457FVUVtzgzGks8ZljeJWtFXC7dLRtdSpBA2rLJ+Yr5rNHMyZt57WkMLCAKnGr67BU6kcKo3b17DLajgla8WXcc9nmqgiu2U/s+MUDpGTX3MaXFty6CAKkA1ONFSVelWZVBLDMdP7qlWhUpGHiF9asli1ZLh7rfrjoH1Kx1c1OhyRaHtDmQzOadTmtJB6iAtdsyfLFjJHI0HVea4V6iQvUsgWkx5KbIACWRSOAOolpeady05s5ystwkikja1wbUtrea5taHWNhp2hYAwarq8XUYa0vIc4SMMPzr6F5tk7Jc094QxufdpepTCtaa+oqPaIHMeWPBa5po4HWDuXoebOSnQW21xQva1rdERVhfVrrzmj0hqqQuG3IBtVutQfNGzROq913WDWpDSaAYbThUKLuCzOsLt7bAN4uI2Rhey7NqqaK8y5iRyRl1mtLJCNmBaTuvNdgVy81s1+FaW9I6MxOAIug4m9WuOy6oulLNhrh4ZGeWIjDnVaRX+zfZz5n3k9H7msBA3VJOPcuBk7NWWW1SWeoboT94+lQB/wASBtJ1gIulD7DaGXQW54DEZ/n7qvovQJ/s4FW3JzSvnVYK03tod+wriW3NF4tgs0Tr5LQ4ucLoa01BJArhgO1BaQpfufaGZt2gZg59arSL0I/Zs27+O6/TkC7XqrWnrVKytk2SzTOikAvDEEanNOpwO5BaRmqV7HWogF7cFCXmkOodS9LKpdmsTCQLo1cr6rbYWl16Ob91u3KqBgfPN/kuWiskWTocKtb7R8VO4ps3Ib7TvFdMWV52hbn2+m05Hu81TUVxmyLAWGjKYGhDneKpwSqtF1OJTaFobWBLdmqIiJSeiIiEQrTmj+E/9X/Vqt2bH8bZ/wBZn+YVPzQ/Ck/V/wBGKx2ad0b2vYaPY4OacDQg1BoV1aQmiBzLg1nXbQXaOnsK9ezpzkFi0dYy/SX9Tg2l270fm7l5znJnPLantNBGyM1a0GtHcou2n4KDlbLU9pu6d9+5W75rRStK+iBuC05Ms4kmjjJID3NaSNgc4CuPWk2eyMotDnD2hMn8wyTbTa313XGk3TED/fTzr2GyNZa47NPtab4/quOY5vqdj/aqXlC26XLsfJikYwf21vfuc5WmBsWTLGQ+QuDS5za0DnOOIY1vX8SV5Hp3X9JUh96t4a71b1QetZrFSDi8tyALW9crVbqxYGBw9qQ5w6I/AvSPtHyLLMGSxhpZAyQvqaGnmnAbcAVMy1M5mRmuY4tdoIBUGhobgOPUSqLac8LY+MsdN5pFDRjASKUIJoo0+cNpfBoHSVhDWtu3Wam0uioFdgTW2WrdY10Q0ztyz0Sn2ujee5oMuEbM4jVeg5McXZEJJJOgmxJqcC8DHqAW+0xutGSg2zEBzo2BtDT0boeyuw4OavNos4bS2Dg4kpDdc27db6Lq1FaV2lY5Jy7aLNUQyFrTiWkBza77p29IUGxPxcCJvXhp1qwt7IDSDF26depemZFgfZsmkWo4sY8uBIddaa0bXUddKDfRabNK5mRQ5pLXCzmhGBBxxB3rzvKuX7TaRSaUloxugBra7yBr9ayGcVp0Og0n3NLt26z0d1aVUGxPOLiJLpOkfhQLdTb7IBgNga9fYvQMzJC7JVXEk0nFSSTSrtpXlDdQXWsWcNpii0Mcl2PzvNusPpeliRXaVywtdCi5j3k/EZHesdes2oym0fCIPd5LJq+r41fVxt1v1x/aPqVz6ma9ayFA6TJLWNpefDIG11VcXgV6MVGzNzXdZC+WV7LxbSja3WitXEuIHJHVRUWyZy2uJjY45nNY0UaLjDTbrLarXlDL1pmbdlme5vJwaD1gAV9awXgutxhZ/YeWkuYIGQGXSr/mplBs9utsjMWfctad4aHtr66E+tY5FyNDLarXLI0PcJi0Mdi0CgdUt1GpO3krLNyOx2OEyidji9rdI68DUtqaNZr1uOGtUWTL0rbTLPA90Zlc40wNRWoDmmoJp81MxEp9Su2iynvwDjLiQMc5M9UwvTs3zIb5ksrLMSQAGuY4vAribo2V71zs0oCy125rqV0rHYbnBzh3EKheU1r0ul0z74BaDdZdukgkXaU2DZsCxizktTXvkbNR8pBeQ1nnFooMCN25F8JQ3SpSww43SeTjII2QJx7lcczpnOyjbLznHE6zyXkN7BguvkK0N4dbY8L96I9JbowO4/5LzCyZYnikfJHIWySVvuo01qanAimtdrNV0c9pfLaLQ9kxHmkEMLnFtK3vRwAGBGPSoDtiiy20EsptGN5xxgCDe2645a4Kz5GyDaI8oSzvcDE8uxvEl4OLQW/lw6qYKfFaGNym9hoHPhZc6bpcXAdOIPqXyzxCF2ltFs0gaDcBusArtut9I0w9ZXnecuWOEWp00Zc0NoIziHUbqd0EkkqTAC01qrbJTEDEumCQTjnlIHnzyrvHkG0DKxtRcNFjjexLbl0Mu9eO7CutV77TbQx1pY1tC6NlH9BOIaemmPrXMOd9tu3dO6m+4y97VKrhvcSSSSSTUkmpJOsknaqlwiAudaLZSdSdTpNPtOvGdebNfF5jCNXUvTl5jDs6lpsm3q/dadxv6n/X/JbqL5RZVXxbIXYJKueR/wCEZ+m74lUwK3ZKnAsrRQ+g74lVALVaD7LOjyXPsYN+p0+a+oiLKt0LC8EvBa0VZTIVvzQron05z/Vq7t127vCruaJ+5f8Aq/6tXcqmi3vYLoAw6V27P6I2a10m131XguEkC7HVIJW667d3hLp3DuWiqVU8ZVOSO/zTvUax/Nf4ftUh1Troet30Xy67d3haKpVTxlU5I7/NHqNY/mv8H2rfddu7wl127vC0L72qOMqnJHf5o9RrH82p4ftW667d3hLrt3eFoRHGVTkjv80eo1j+a/w/at9127vCXXbu8LRVKo4yqckd/mj1GsfzX+H7Vvuu3d4S67d3haKojjKpyR3+aPUax/Nf4ftUhrTuHtBZUPR7QUaqV61htLzXffdhhGHWqO9A7G4zv1Tw/apND0e0Eoej2go1etKrPvQ1VfUKx/OqeH7VJuno9oJQ9HtBRqpXrRvQ1QPQGxD+tU8H2qTQ9HtBKHo9oKNXrSvWjehqj1Bsfzqnh+1SaHo9oJQ9HtBRq9aV60b0NUeoNj+dU8P2qTcPR7QS6ej2go1UqjehqgegNiGVap4PtUiR10Fzi0ACpN4YBQeOrPz0XtrVlc/+PN+m75KhNTG0Adq4e63ovZ7E9rWVHGRON3WNgC9C46s/PRe0vP4jq6kRPpUxTyWSy2NtnvXSTMZxsnzWy+EvBa0TZWtWWwW1ggaCTW6dh6VXg5T7P+GOo/NcwJ1V5cGzos9GmGudG0+a2Xgl4LWiTKfCItmhfyJPYd4JoX8iT2HeCiVF5uqs2aX4L/1f9WrvwRF7w1oq5xAaN5rQDtK4WarCIX1BH3g1gj/i3erHky1aKaOUCujex1N9CHU7lndmV9H3LP8AI0ox9nvxV4tWT8nWBrGWhjppnNqaYgDeGlwoKg01nBcTK2S7NPNEzJ5JdICXRl2DCATS+TgaB1RU7FYc6s33W50dpsro3NcxrXVdSlCSD140I1iij5Czd4JlCzVlje97JC5ja1adE7HpbsBw6lRcqz2ljaW+ms41bryWEmJAJgtiABsy6dirsmaFrAFY8XSGNoq2rnAOJIG6jHYncssoZm2uGMyOjBDRU3S1xaNpLRjTqqrDCHWjK8kck8zWROeWNEjhi00DW0PmmjnYjGld6sWb1juPnbwXQtdUCspfpQCRW4Sd4x/NREq9o3VrUGgktm61xEbHHKS8GecNdjiV5rkbNe02lhdEwFoNKkgAkaxjrVkzLzfAltEVqhaXsY0ta4B2su85pGGNAuhkSzSmyRQT2bSQ3jddE+jmG+4VeKjUS41B1a8V0MjWAQW20hsj31hjdVzrz2nzgGucdwApXYQoJS7fui9zK1MOGHu3ccA9om8HGNsgtHMvP7XmjamQmV8dG3cRUXgN5brUXNzJDrVaGxDBuJcdzBrNN+odZCuOaFuklsVuMj3PIY/W4uoXROrSurUMFXcx8qss9svPNI3gsJOoXi0hx6KgdqtK6PCbSWWhsAvZldBiSJyM5d+GB29+0OyTDIbO6GRxBuukxPnA0dV18ajroKKsWjIomtb4rDeljBq0nCg21OAug6jt6VYsq5iTSWlz43RGGVxcHVxAeanCmNKmlNeGpdPNaxthFsssM0brRSrXtNK+YQ3Vta7XStLw6lCwttlKhSNSjVL3XQSHOJAkgFx0gnIEHLpVKyvmvabOy9IzzNpaQ4DdUjEKPlPIc1nEbpGgCUVZQg1GBxpq9IK+2CCaz5OtXDXnzg8Ma5941LCAAanWaUFdlV9zmyLLa4bGYQCGtaXOLgA1pawhxrrGB1YonGE+luq4VGtqObdvOaXibphsiMdcDiZ2KmvzRtLZmwlg0jm3wL7KXRUE11bFhPmpamhpdGaySaNrQQXOOJrd2CgJqdmK9NtTCcpQPFC10EgBrrINfg4KnQW21Pyu8RnSOjkmuskc4MutvtujYDdNBQa9e1RKXZt07RWbeF0Qy+ZnOXCJnDIdGOq4+Usz7VDGZXsF1uJIc11BvI8F9sGZtrmjEjY6ClW3nNaXDYQ0/OiumVsmxuglnfHPZyCHSsMgMcpvBxBFSDU4A4Y0U/K8LZZIZGQyzCgMb45rjG41BIqNlMfUplL44q3WjCSSCYEYAGAb904k4h2QBicF5FarK+N7o5GuDgaOB1hWPI+ZjpoWSvnhjZJ6NTUk6qUrQGvTVfPtBtektYBja18bWtdR4fUgkjEbaHUcV38080xoGWiUOlcRpI4b11uNC0mu00BOzVrUrZabe5lkZWc6450YAB08wkxzych31a3ZqTx2llmFx7pBVpGotxqTXqNfmujlDMKWONz2SxyOYKvjaDUYVNBTE02YKxw2uZmU43WxsbBLG6OINIcG4ggF2wk1Fdt4Bb8i5NkstptdpncBE6+4G9W8C8vBpsIGFOlRKw1d1LQxrSXtkNBgAEVCXQQCDs/47csIVJyDmmbRFpnTwxRh5aXE43hsLdQ2aztTK2Z08M0cTbshlrcLajViQQRsBB1rt5n5qtmjNomLzGXExwtN0OukipNd94DV14rfnG23unguBkIq5kDWvBIqzEkka7opqw70StTre8Wx1NlVsC9IcAACAYEzecQR7RGAAVcy/mjJZYGyyPjNXBpDSSQ4tc7WRQ6iFXV6tnNkaeXJsMeBljuukLnV1RvDjeOs1IXlSkLXuVazaKJLnAuBIMRlOBgawoeVv4eb9N3yVDYr/lE0ik/TPyVQitLd/cU+kAdq896UOIrU4Hwn6qDVKrpcJZv7inCWb+4p90ary++Hkrm1Sq6XCWb+4pwlm/uKLo1Rvh5K+2f8MdRXMC6DrU2mvuK56HxgimDiSiIiWmru8Yx8ruPgnGMfK7j4LhIqb2Fm4KznV3yLO18RLTUBwU5cDNe0RshcHvY12kqA5wGF1uOK7HDoTqli943xSiIK+l7kFjLDSbOTRtXQslvliro5JGV13HkV66HFYMtbw++HuD+WHUOOBxrXUobrbENcsXvG+Kx4fDz0PvGqIXQv0zJkY84xU02l9/SXjpK1vVNa76669KkcbTmQPM0pkAoH6R94DaAa1p0LmR2uM6pIz1Pb4o62RjXLEOt7fFQoLqRMSNNnYujZcpzRV0cszLxq67I9tTtJocT0rGO3StJLZJAXekQ8gu6yDj61zuHw89D7xqcPh56H3jVKJpajHo71Phtb2ghr3Na70gCQPWAcfWtCj8Ph56H3jU4fDz0PvGoUh9MZEdoXSjyjM2O42WW5yBI4D2QaLTHI5pDmlwI21II6iNSh8Ph56H3jU4fDz0PvGoRfpicRjniMenXrXStuUJZaaWSWSmq88up1VJogyjMGaMSyCM1qwPcG46/NrTuXO4fDzsPvG+K+cPh56H3jUQommABIgdC6fGc3m0lm+7FGfeO80bm44DAYDctBldevVferWtTWuut7XXpUThsJ1Sxe23xX11sjGuWIf3t8UQpDqYOBE9S6NrylNKAJJZn01B0jiB1AlLNlSZjbscszWnWBI8D2Wmi5nD4eeh941OHw89D7xqiFH8KLsiNMIUknbtUyPKs7QAJpgBgAHvAA3ABcrh8PPQ+8anD4eeh941ClzqbveIPTCn2q2SSGsj3vLfRq4mm+lSs7RlGV7Q18szmjUC9xaOppNAubw+HnofeNTh8PPQ+8apRepYYjDLLDoXTs+UpWC6ySVrRqAe6g6gDRH5SmJBMsxLTVpMjiWnVUEnA03LmcPh56H3jU4fDz0PvGoVf4Ofs9y65yxaNs8/vJFAUfh8PPQ+8anD4eeh941QrNdSbkQOxYZX/h5v03fJUNiu2U7bEYJQJYiSw0Ae0kncBVUlqbTXkfSVwNanB+E/VZIiJq82iIiEIiIhCIiIQiIiEIt1ij8/1FaVvsXp+oqW5hUeBdK2W+PAdahXFPyhqHWoSl/vKtMC6ujkiEEO16wtGVIqSeofNS8i6ndYUbK34n9o+aSPeSWgb+VBuJcWSJkLVAWNxLiyREIgLG4lxZIiEQFm6PzAtVxb3egP8Au9alJUADRbrFH53qK2W+PV6/ksbD6fqPyWzKGz1/JXA9hKIG+BQbi2wWa9XGlFgpdi1H1fNUaASmOAAWHAPzd31TgH5u76qOiMNEXPyApTLDiPO7l9lsGPpdyjR6x1r7N6RU4Rkou4/6C28A/N3fVOAfm7vqo6KMNFN38gKRwD83d9U4B+bu+qjojDRFzn7gs5rPd21qtYCl27Z6/koqCIKlmSIiKFZEREIRFsEJX3QFRKi8FqRbdAU0BUyi8FqRdPik8sdn1Tik8sdn1Vb7Uvf6eq+ZPyQZWXmywNN5wuvfdNGhlXVxw88DVsKlZPyG4gSCay0uXqaUhwBANC0t10Py1qJxSeUOz6rNmT7hvXgfUpa4EjFQa1MiAV0rVm+5xumeyggu1yYEgClCBqJc0es66FRGZtvLrunsVca/fagKVNbtNo/+AlaZLLpMKgU6KrDig8oez9VaoQHYlQ2qxogldvJub723gJbM6rgBSSpON2tKav8AusEDTlXNqQvqJrJS6P8A3AH4bz3VUSw2TRg41rTZRc/Kw+8/tHzSgZcl03NdWJCmR5vvLnN01lBa6hOlwNAHEjDUA5uOrGmw0+Nzfeb1JrLRrnNxloTdc5tQ27Whu1HQRvXHovoTFrXcOa8oNDLZAcdc2qhIIJpQHDUvsmbEgfdbNY3EmjQJcXY0AApSvWdvWuDRfQhC64zefSpmsgHTKfgG9H/aGnKkZdcWmlWkg0NRgaYHaOlYUX1CFuI8wLVcO4rJshC+6Yq2CrBC22FpvajqPyWy3jV6/ksbHIS7HcVnbnkUp0/JX+BKM74FCuHcVKsbTQ4HZ81o0xUmxymh9Sq2JV3zCh3DuPYlw7is9MU0xVcFfFfI2mowKTekV90xWslBiECZRERQpRERCFKt2z1/JRVKt2z1/JRVZ2aqz3QiIiqrIiIhCludRtehauEHcFsk9H1BRVUBKY0EYrdwg7gnCDuC0opgK9xuin8av3M7D4pxq/czsPiiIuhL3qnyU41fuZ2HxWcVuc83SG06Kr6iloF4INJgBIC+zWksxAGO9auNX7mdh8URWqAFyqymwiSE41fuZ2HxUS0TF7rxpVEVAAExrGDEBa0RFKYiIiEIiIhCIiIQpFh9P1H5LZlDZ6/kiJnwJJ/UChqXYtR9XzRFVuaY/wB0qIiIqqyIiIQiIiEIiIhClW7Z6/koqIrOzVWe6EREVVZEREIUqT0fUFFRFAS6eSIiKUxf/9k=" }]

    const [coursess, setCoursess] = useState(courses);
    const handleAddProduct = (course) => {
        //console.log('Product added', product);
        const newCart = [...cart, course];
        setCart(newCart);


    }
    const [cart, setCart] = useState([]);

    return (

        <div className="home-container">
            <div className="courses-container">
                {
                    coursess.map(crs => <Courses handleAddProduct={handleAddProduct} course={crs}></Courses>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>


    );
};

export default Home;